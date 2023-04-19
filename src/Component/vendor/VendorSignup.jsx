import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/logo.png';
import VendorSign from '../../assets/login-img.svg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { API } from '../../config/Api';

function VendorSignup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('')
    const [shopifyUrl, setShopifyUrl] = useState('')
    const [instagramUrl, setInstagramUrl] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
        
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
        setShopifyUrl(event.target.value);
    }

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
        console.log(formData)
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
                toast.warn("Username may not be blank.");
            }
            else if(error.response.data.email== "user with this email already exists.") {
                toast.warn("User with this email already exists.");
            }
            else if(error.response.data.email == "This field may not be blank.") {
                toast.warn("Email may not be blank.");
            }
            else if(error.response.data.email == "Enter a valid email address.") {
                toast.warn("Enter a valid email address");
            }
            else if(error.response.data.password == "Password must be more than 8 character.") {
                toast.warn("Password must be more than 8 character.");
            }
            else if(error.response.data.password == "This field may not be blank.") {
                toast.warn("Password may not be blank.");
            }
            else if(error.response.data.confirm_password == "This field may not be blank.") {
                toast.warn("Confirm Password may not be blank.");
            }
            else if(error.response.data.shopify_url == "Shopify_url cannot be empty") {
                toast.warn("Shopify url cannot be empty");
            }
            else if(error.response.data.shopify_url == "user with this shopify url already exists.") {
                toast.warn("User with this shopify url already exists.");
            }
            else if(error.response.data.instagram_url == "instagram_url cannot be empty") {
                toast.warn("Instagram url cannot be empty");
            }
            else if(error.response.data.non_field_errors == "Password fields did not match.") {
                toast.warn("Passwords did not match");
            }
          })
    }

    
  return (
    <div className="margin-outer-signup vendor-sign">
        <div className="vendor-sign-container d-md-flex">
            <div className="vendor-sign-img col-md-6 p-0">
                <img src={VendorSign} alt="vendor-sign" className='w-100' />
            </div>
            <div className="vendor-sign-content col-md-6 px-3 px-lg-5 d-flex flex-column align-items-center justify-content-center">
                <img src={Logo} alt="logo" />
                <h3 className='mb-4'>Merchant Sign Up</h3>
                <form className='d-flex flex-column justify-content-between align-items-center w-100'>
                    <input type="text" placeholder='Username' value={name} onChange={handleName} />
                    <input type="email" placeholder='Email' value={email} onChange={handleEmail} />
                    <input type="password" placeholder='Password' value={password} onChange={handlePassword} />
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPassword} />
                    <input type="file" onChange={onFileChange} />
                    <input type="text" placeholder='Category' value={category} onChange={handleCategory} />
                    <div className="input-container w-100 d-flex">
                        <label htmlFor="">https://</label>
                        <input type="url" placeholder='shopify URL' value= {shopifyUrl} onChange={handleShopify} />
                    </div>
                    <input type="url" placeholder='Instagram URL' value={instagramUrl} onChange={handleInstagram} />
                </form>
                <div className="links d-flex align-items-center mt-4">
                    <button className='buttonfx angleindouble color-1 Signup' onClick={createVendor}>Signup</button>
                    <p className='mb-0 ms-3'>Or <Link to='/vendor-signin'> Sign In</Link></p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default VendorSignup