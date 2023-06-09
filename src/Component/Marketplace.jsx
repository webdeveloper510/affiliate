import React, {useState, useEffect} from 'react';
import  Footer from './Footer';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { API } from '../config/Api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  
function Marketplace () {
    const [marketItems, setMarketItems] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("logToken");
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
          items: 3, // Adjust the number of items shown on desktop
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2, // Adjust the number of items shown on tablet
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1, // Adjust the number of items shown on mobile
        },
      };

    const handleApplied = (e, id) => {
        e.preventDefault();
        localStorage.setItem("appliedId", id);
        if(token) {
            navigate('/dashboard');
        }
        else {
            toast.warn("Sign in in to continue")
            navigate('/login');
        }
        
    }

    return ( 
        <>
        <div className='pt-110pb-68 market'>
            <div className='container'>
                <h2 className='mb-4 mb-md-5'>MarketPlace</h2>
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

                                                    <p className="card-text">Coupon: <strong>{(prod.coupon_name != null ? prod.coupon_name : 'No Coupons').filter(Boolean).join(", ")}</strong></p>

                                                    <p className="card-text">Amount: <strong>{(prod.amount != null ? prod.amount : 'No Coupons').filter(Boolean).join(", ")}</strong></p>

                                                    <p className="card-text">Discount Type: <strong>{(prod.discount_type != null ? prod.discount_type : 'No Coupons').filter(Boolean).join(", ")}</strong></p>

                                                    <button className="buttonfx angleindouble color-2" onClick={(e) => {handleApplied(e, item.campaignid_id)}}>Apply</button>
                                                </div>
                                            )
                                        })}
                                    
                                </div>
                            </div>
                        )
                    })}
                    
                </Carousel>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Marketplace;