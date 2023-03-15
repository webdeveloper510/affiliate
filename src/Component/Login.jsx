
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../assets/logo.png';
import login from '../assets/account-login.png';
  
function Login (){


    const [isActive, setActive] = useState("false");
    const [isActiveNew, setActiveNew] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    setActiveNew(!isActiveNew);
  };

  const handleToggleNew = () => {
    setActiveNew(!isActiveNew);
    setActive(!isActive);
  };

    return (

        <>
        <div className='container-fluid'>
        <div className="row vh-100 d-flex justify-content-center align-items-center">
               
    
        <div className='col-md-6 left-desktop'>
        <img src={login} alt="Logo" />
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
                        <h3>Merchant Login</h3>
                        <Form>
                            <div className={isActive ? "loginshopify" : "loginshopifyremove"}>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Shop Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">.myshopify.com</InputGroup.Text>
                        </InputGroup>
                        <span className='loginby' onClick={handleToggle}>Or login by Email and Password</span>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                              Login
                            </Button>
                          </div>
                        </div>
                       
                        <div className={isActiveNew ? "loginname" : "loginnameremove" } style={{display: "none"}}>
                          <Form.Group className="mb-3" controlId="formname">
                            <Form.Label className="text-center">
                              Username
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                              Email Address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                          </Form.Group> 
                          <div className='col-md-12 inline-style'>
                          <span className='loginby' onClick={handleToggleNew}>Or login by shop url</span>
                          <Form.Check aria-label="option 1" label="Remember Me" />  
                          </div>

                          <div className="d-grid">
                            <Button variant="primary" type="submit">
                              Login
                            </Button>
                          </div>
                          <a href='/forgotpassword' className='forgot-password' onClick={handleToggleNew}>ForgotPassword</a>
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
  
export default Login;