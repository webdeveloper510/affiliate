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
    const navigate = useNavigate();
    const token = localStorage.getItem("logToken");
    const {setAppliedId, influStatus, setInfluStatus} = useContext(UserContext);
    useEffect(() => {
        axios.get(API.BASE_URL + 'campaign/marketplacewebsite/')
        .then(function (response) {
        console.log("Marketplace", response);
        setMarketItems(response.data.data)
        })
        .catch(function (error) {
        console.log(error);
        })
    }, [])

    console.log("marketItems", marketItems)

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


    return ( 
        <>
        <div className='pt-110pb-68 market'>
            <div className='container'>
                <h2 className='mb-4 mb-md-5'>MarketPlace</h2>
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

                                                  <p className="card-text">Coupon: <strong>{(prod.coupon_name != null ? prod.coupon_name.filter(Boolean).join(", ") : 'No Coupons')}</strong></p>

                                                  <p className="card-text">Amount: <strong>{(prod.amount != null ? prod.amount : 'No Coupons').filter(Boolean).join(", ")}</strong></p>

                                                  <p className="card-text">Discount Type: <strong>{(prod.discount_type != null ? prod.discount_type : 'No Coupons')}</strong></p>

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