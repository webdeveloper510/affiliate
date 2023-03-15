
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../assets/logo.png';
import signup from '../assets/account-login.png';
  
function ForgotPassword (){


//     const [isActive, setActive] = useState("false");
//     const [isActiveNew, setActiveNew] = useState("false");

//   const handleToggle = () => {
//     setActive(!isActive);
//     setActiveNew(!isActiveNew);
//   };

//   const handleToggleNew = () => {
//     setActiveNew(!isActiveNew);
//     setActive(!isActive);
//   };

    return (

        <>
        <div className='container-fluid'>
        <div className="row vh-100 d-flex justify-content-center align-items-center">
               
    
        <div className='col-md-6 left-desktop'>
        <img src={signup} alt="Logo" />
            </div>
               
              <div className='col-md-6 right-desktop'>
                <div className="content">
                    <div className="col-xs-12 col-md-8">
              
                    <div className="mb-3 mt-md-4 login-div">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      <div className="site-logo">
                        <a href="/">
                      <img src={logo} alt="Logo" />
                      </a>
                      </div>
                      </h2>
                      <div className="mb-3">
                        <h3>Forgot Password</h3>
                        <p>Enter your email address and your password will be reset and emailed to you</p>
                        <Form>
                       
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                          </Form.Group> 
                          <div className="d-grid">
                            <Button variant="primary" type="submit">
                              Send New Password
                            </Button>
                          </div>
                         </div>

                         
                          
                        </Form>
                        {/* <div className="mt-3">
                          <p className="mb-0  text-center">
                            Already have an account??{' '}
                            <a href="/" className="text-primary fw-bold">
                              Sign In
                            </a>
                          </p>
                        </div> */}
                      </div>
                    </div>
                 
                </div>
                </div>
              </div>
            </div>
        
    </div>
     
     
     </>
    ) ;
}
  
export default ForgotPassword;