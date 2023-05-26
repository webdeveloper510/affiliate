import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/logo.png';
// import VendorSign from '../../assets/login-img.svg';
import signup from '../../assets/sign1.webp';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { API } from '../../config/Api';
import Signup from '../SignUp';

function VendorSignup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('')
    const [urlError, setUrlError] = useState('');
    const [shopifyUrl, setShopifyUrl] = useState('')
    const [instagramUrl, setInstagramUrl] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUserBlank,setisUserBlank]=useState(false);
    const [isEmailBlank,setisEmailBlank]=useState(false);
    const [isPassBlank,setisPassBlank]=useState(false);
    const [isCpassBlank,setisCpassBlank]=useState(false);
    const [isShopifyBlank,setisShopifyBlank]=useState(false);
    const [isInstaBlank,setisInstaBlank]=useState(false);
    const [confirmType, setConfirmType] = useState(false);
    const navigate = useNavigate();
    

    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword,setShowCPassword]=useState(false)

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
        
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmVisibility = () => {
        setConfirmType(!confirmType);
    };

    console.log("Selected File", selectedFile)

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleShopify = (event) => {
        const url = event.target.value;
        setShopifyUrl(url);
    
        // Check if the URL is valid
        const urlPattern = /^[\w.-]+\.[a-zA-Z]{2,}$/;
        if (!urlPattern.test(url)) {
          setUrlError('Invalid URL');
        } else {
          setUrlError('');
        }
    };

    const handleInstagram = (event) => {
        setInstagramUrl(event.target.value);
    }

    const createVendor = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',selectedFile);
        formData.append('username', name);
        formData.append('category', category);
        formData.append('instagram_url', instagramUrl);
        formData.append('email', email);
        formData.append('shopify_url', shopifyUrl);
        formData.append('password', password);
        formData.append('confirm_password', confirmPassword);
        formData.append('type','normal');
        console.log(formData);
        setisUserBlank(false);
        setisEmailBlank(false);
        setisPassBlank(false);
        setisCpassBlank(false);
        setisShopifyBlank(false);
        setisInstaBlank(false);
        if(name.length>30){
            setisUserBlank(true);
            return toast.warn("Username should not be more than 30 characters.");
        }
        if(email.length>30){
            setisEmailBlank(true);
            return toast.warn("Email should not be more than 30 characters.");
        }
        if(password.length>30){
            setisPassBlank(true);
            return toast.warn("Password should not be more than 30 characters.");
        }
       
        if(shopifyUrl.length>30){
            setisShopifyBlank(true);
            return toast.warn("Shopify url should not be more than 30 characters.");
        }
        if(instagramUrl.length>30){
            setisInstaBlank(true);
            return toast.warn("Instagram url should not be more than 30 characters.");
        }
      
        
        axios.post(API.BASE_URL + 'campaign/vendor/register/',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(function (response) {
            console.log("Created New Vendor", response);
            toast.success("Signup Successfully!");
            navigate('/vendor-signin');
        })
          .catch(function (error) {
            console.log(error);
             if(error.response.data.username) {
                setisUserBlank(true)
                toast.warn("Username may not be blank.");
            }
            else if(error.response.data.email== "user with this email already exists.") {
                toast.warn("User with this email already exists.");
            }
            else if(error.response.data.email == "This field may not be blank.") {
                setisEmailBlank(true)
                toast.warn("Email may not be blank.");
            }
            else if(error.response.data.email == "Enter a valid email address.") {
                toast.warn("Enter a valid email address");
            }
            else if(error.response.data.password == "Password must be more than 8 character.") {
                toast.warn("Password must be more than 8 character.");
            }
            else if(error.response.data.password == "This field may not be blank.") {
                setisPassBlank(true)
                toast.warn("Password may not be blank.");
            }
            else if(error.response.data.confirm_password == "This field may not be blank.") {
                setisCpassBlank(true)
                toast.warn("Confirm Password may not be blank.");
            }
            else if(error.response.data.shopify_url == "Shopify_url cannot be empty") {
                setisShopifyBlank(true)
                toast.warn("Shopify url cannot be empty");
            }
            else if(error.response.data.shopify_url == "user with this shopify url already exists.") {
                toast.warn("User with this shopify url already exists.");
            }
            else if(error.response.data.instagram_url == "instagram_url cannot be empty") {
                setisInstaBlank(true)
                toast.warn("Instagram url cannot be empty");
            }
            else if(error.response.data.non_field_errors == "Password fields did not match.") {
                toast.warn("Passwords did not match");
            }else if(error.response.data.email== "user with this email already exists.") {
                toast.warn("User with this email already exists.");
            }
          })
    }

    
  return (
    <div className="margin-outer-signup vendor-sign" >
        <div className="vendor-sign-container d-md-flex">
            <div className="vendor-sign-img col-md-6 p-0 bg-primary">
                <div className='col-md-6 m-auto align-middle'>
                <img src={signup} alt="vendor-signup"  />
                </div>
            </div>
            <div className="vendor-sign-content col-md-6 px-3 px-lg-5 d-flex flex-column align-items-center justify-content-center">
                <h3 className='mb-4'>Merchant Sign Up</h3>
                <form className='d-flex flex-column justify-content-between align-items-center w-100'>
                    <label className='text-start w-100 mb-2 text-dark'>Username{<span style={{color:'red'}}>*</span>}</label>
                    <input type="text" value={name} onChange={handleName}  style={{ border: isUserBlank ? '1px solid red' : '1px solid black' }}/>
                    
                    <label className='text-start w-100 mb-2 text-dark'>Email{<span style={{color:'red'}}>*</span>}</label>
                    <input type="email" value={email} onChange={handleEmail} style={{ border: isEmailBlank ? '1px solid red' : '1px solid black' }}/>
                    
                    {/* <label className='text-start w-100 mb-2 text-dark'>Password{<span style={{color:'red'}}>*</span>}</label>
                    <input type="password" value={password} onChange={handlePassword} style={{ border: isPassBlank ? '1px solid red' : '1px solid black' }}/> */}

                <div className='d-flex justify-content-between w-100'>
                    <label className='text-start w-100 mb-2 text-dark'>Password{<span style={{color:'red'}}>*</span>}</label>
                    <FontAwesomeIcon 
                            icon={showPassword ? faEyeSlash : faEye}
                            className="password-toggle-icon position-relative"
                            style={{ top: '45px',right:'10px',zIndex:'4' }}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                      </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePassword}
                            style={{ border: isPassBlank ? '1px solid red' : '1px solid black' }}
                        />
                    
                    {/* <label className='text-start w-100 mb-2 text-dark'>Confirm Password{<span style={{color:'red'}}>*</span>}</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} style={{ border: isCpassBlank ? '1px solid red' : '1px solid black' }}/> */}

<div className='d-flex justify-content-between w-100'>
                    <label className='text-start w-100 mb-2 text-dark'>Confirm Password{<span style={{color:'red'}}>*</span>}</label>
                    <FontAwesomeIcon 
                            icon={showCPassword ? faEyeSlash : faEye}
                            className="password-toggle-icon position-relative"
                            style={{ top: '45px',right:'10px',zIndex:'4' }}
                            onClick={() => setShowCPassword(!showCPassword)}
                    />
                      </div>
                        <input
                            type={showCPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            style={{ border: isCpassBlank ? '1px solid red' : '1px solid black' }}
                        />
                    
                    <label className='text-start w-100 mb-2 text-dark'>Upload Profile Image</label>
                    <input type="file" accept="image/*" onChange={onFileChange} />
                    
                    <div className="input-field w-100">
                        <label className='text-start w-100 mb-2 text-dark'>Select Category</label>
                        <input type="text" className='mb-0' maxLength='30' value={category} onChange={handleCategory} />
                    </div>

                    <label className='text-start w-100 mb-2 text-dark'>Shopify URL{<span style={{color:'red'}}>*</span>}</label>
                    <div className="input-container w-100 d-flex">
                        <label htmlFor="">https://</label>
                        <input type="url" placeholder='shopify URL' value= {shopifyUrl} onChange={handleShopify} style={{ border: isShopifyBlank ? '1px solid red' : '1px solid black' }}/>
                    </div>
                    
                    <label className='text-start w-100 mb-2 text-dark'>Instagram Handle{<span style={{color:'red'}}>*</span>}</label>
                    <input type="url" value={instagramUrl} onChange={handleInstagram} style={{ border: isInstaBlank ? '1px solid red' : '1px solid black' }}/>
                </form>
                <div className="links d-flex align-items-center mt-4 pb-4">
                    <button className='buttonfx angleindouble color-1 Signup' onClick={createVendor} disabled={!!urlError}>Signup</button>
                    <p className='mb-0 ms-3'>Or <Link to='/vendor-signin'> Sign In</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VendorSignup