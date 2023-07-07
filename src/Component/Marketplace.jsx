import React, {useState, useEffect} from 'react';
import  Footer from './Footer';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { API } from '../config/Api';
  
function Marketplace () {
    const [marketItems, setMarketItems] = useState([]);
    useEffect(() => {
        // setLoading(true);
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

    const options = {
        margin: 25,
        responsiveClass: true,
        navText: ["Prev", "Next"],
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        },
    };
    return ( 
        <>
        <div className='pt-110pb-68 market'>
            <div className='container'>
                <h2 className='mb-4 mb-md-5'>MarketPlace</h2>
                <OwlCarousel items={3} className="owl-theme" {...options}>
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
                                                </div>
                                            )
                                        })}
                                    
                                    <button className="buttonfx angleindouble color-2">Apply</button>
                                </div>
                            </div>
                        )
                    })}
                    
                </OwlCarousel>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Marketplace;