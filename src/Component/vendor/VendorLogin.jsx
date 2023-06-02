import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/logo.png';
import VendorSign from '../../assets/login-img.svg';
import { toast } from 'react-toastify';
import { API } from '../../config/Api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {  faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

function VendorLogin() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [shopifyUrl, setShopifyUrl] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const handleShopify = (event) => {
        setShopifyUrl(event.target.value);
    }

    console.log(isActive)
    const logVendor = (e) => {
        let data;
            if (!isActive) {
                data = {
                    password: password,
                    email: email,
                };
            } else {
                data = {
                    shop: shopifyUrl,
                };
        }
        e.preventDefault();
        axios.post(API.BASE_URL + 'campaign/vendor/login/', data)
        .then(function (response) {
            console.log("Vendor Login", response);
            toast.success("Logged In Successfully!");
            localStorage.setItem('token', response.data.Token);
            if(response.data.admin_dahboard) {
                window.location.href = response.data.admin_dahboard
            }
            else {
                axios.get(API.BASE_URL + '/store/install/?shop=' + response.data.shop_url)
                .then(function (responsee) {
                    console.log("Install Response", responsee);
                    window.location.href = responsee.data.url
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
           
        })
        .catch(function (error) {
        console.log(error);
        if(error.response.data.error== "Invalid credentials") {
            toast.warn("Invalid credentials");
        }
        })
    }
  return (
    <div className="margin-outer-signup vendor-sign">
        <div className="vendor-sign-container d-md-flex">
            <div className="vendor-sign-img col-md-6 p-0">
                <img src={VendorSign} alt="vendor-sign" className='w-100' />
            </div>
            <div className="vendor-sign-content col-md-6 px-3 px-lg-5 d-flex flex-column align-items-center justify-content-center" style={{background: '#edeaf2'}}>
                <h3 className='mb-4'>Merchant Sign In</h3>
                <form className={isActive ? 'active d-flex flex-column justify-content-between align-items-center w-100' : 'd-flex flex-column justify-content-between align-items-center w-100'} >
                    {isActive == true ? (
                        <>
                            <div className="input-container w-100 d-flex">
                                <label htmlFor="">https://</label>
                                <input type="url" placeholder='shopify URL' value= {shopifyUrl} onChange={handleShopify} />
                            </div>
                        </>
                    )
                :
                (
                    <>
                        <div className="input-container w-100">
                            <input type="email" className='ps-4' maxLength='30' placeholder='Email' value={email} onChange={handleEmail} />  
                        </div>
                        <div className="input-container input-field input-pass w-100">
                            <input type={showPassword ? 'text' : 'password'} className='ps-4' maxLength='30' placeholder='Password' value={password} onChange={handlePassword} />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                style={{
                                    color: "#1032bb",
                                    width: "20px",
                                    height: "20px",
                                }}
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </>
                )}
                </form>
                <button onClick={handleClick} className='log'>
                    {isActive==true ? "Login by Email" : "Login by Shop URL"}
                </button>
                <div className="links d-flex align-items-center mt-4">
                    <button className='buttonfx angleindouble color-1 Signup' onClick={logVendor}>Login</button>
                    <p className='mb-0 ms-3'>Or <Link to='/vendor-signup'> Sign Up</Link></p>
                </div>
                <p className='mt-3'><Link to='/login' className='fw-bold'>Sign In</Link> as Influencer</p>
            </div>
        </div>
    </div>
    
  )
}

export default VendorLogin