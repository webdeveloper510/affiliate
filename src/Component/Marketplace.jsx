import React, {useState, useEffect, useContext} from 'react';
import  Footer from './Footer';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UserContext from './context/UserContext';
import { API } from '../config/Api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  
function Marketplace () {
    const [marketItems, setMarketItems] = useState([]);
    const [productList, setProductList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedCommission, setSelectedCommission] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem("logToken");
    const [loading, setLoading] = useState(false);
    const {setAppliedId, influStatus, setInfluStatus} = useContext(UserContext);
    useEffect(() => {
        axios.get(API.BASE_URL + 'campaign/marketplacewebsite/')
        .then(function (response) {
        console.log("Marketplace==========>>>>>>>", response);
        setMarketItems(response.data.data)
        })
        .catch(function (error) {
        console.log(error);
        })
    }, [])

    useEffect(() => {
      setLoading(true);
      axios.get(API.BASE_URL + 'campaign/marketproduct/list/')
      .then(function (response) {
        console.log("Product List", response);
        setProductList(response.data.success)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [])

    console.log("marketItems", marketItems)
    console.log("products", productList)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
        },
    };

    const handleApplied = (e, id) => {
        e.preventDefault();
        setAppliedId(id);
        
        if (token) {
          axios.post(API.BASE_URL + `influencer/inflapplied/?value=${id}`, {
            value: id,
          }, {
            headers: {
              Authorization: `Token ${token}`,
            }})
            .then(function (response) {
              console.log("Requested", response.data);
              toast.success("Successfully Applied")
              navigate('/dashboard');
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          toast.warn("Sign in to continue");
          setInfluStatus(1)
          console.log("influStatus", influStatus)
          navigate('/login');
        }
    };

    const handleFilter = (e) => {
      e.preventDefault();
      setLoading(true);
      axios.post(API.BASE_URL + 'campaign/commission/filter/', {
        commission: selectedCommission,
        product: selectedProduct,
      })
        .then(function (response) {
          console.log("Requested", response.data);
          setMarketItems(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }

    return ( 
        <>
        <div className='pt-110pb-68 market'>
        {loading && <div className='loader'><span></span></div>}
            <div className='container'>
                <h2 className='mb-4 mb-md-5'>MarketPlace</h2>
                <div className="filters d-flex align-items-center mb-5">
                  <h6 className='text-dark'>Search by:-</h6>
                  <form className="filter-list d-flex align-items-end ms-4">
                    <div className="input-container me-4">
                      <label>Product</label>
                      <select onChange={(e) => {setSelectedProduct(e.target.value)}}>
                        <option value="">Select a Product</option>
                        {productList?.length > 0 && (
                          productList?.map((prod, i) => {
                            return(
                              <option value={prod.title} key={i}>{prod.title}</option>
                            )
                          })
                        )}
                      </select>
                    </div>
                    <div className="input-container me-4">
                      <label>Commission Type</label>
                      <select onChange={(e) => {setSelectedCommission(e.target.value)}}>
                        <option value="">Select type of Offer</option>
                        <option value="commission">Fixed Amount</option>
                        <option value="percentage">Percent of Sale</option>
                      </select>
                    </div>
                    <button type="submit" className='buttonfx angleindouble color-2 mb-0' onClick={(e) => {handleFilter(e)}}>Filter</button>
                  </form>
                </div>
                {marketItems?.length > 0 ? (
                  <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  ssr={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="transform 1s ease-in-out"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  >
                  {marketItems?.map((item, i) => {
                      return(
                          <div className="card" key={i}>
                              <div className="card-body text-center">
                                  <h3 className="card-title text-center">{item.campaign_name}</h3>
                                  {item.product?.map((prod, i) => {
                                          return(
                                              <div  className="card-content"> 
                                                  <h6 className="card-subtitle mb-2 text-dark">
                                                  Product Name: <strong>{prod.product_name}</strong>
                                                  </h6>

                                                  <p className="card-text">Influencer Fee: <strong>{(item?.influencer_fee)}</strong></p>

                                                  <p className="card-text">Discount Type: <strong>{prod?.discount_type}</strong></p>

                                                  <button className="buttonfx angleindouble color-2" onClick={(e) => {handleApplied(e, item.campaignid_id)}}>Apply</button>
                                              </div>
                                          )
                                      })}
                                  
                              </div>
                          </div>
                      )
                  })}
                  
              </Carousel>
                ):
                <div>
                  <h2 className='text-center'>No Campaign right now</h2>
                  </div>}
                
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Marketplace;