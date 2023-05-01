
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import login from '../assets/login11.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API } from '../config/Api';
import { useNavigate } from 'react-router-dom';
  
function Login (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    axios.post(API.BASE_URL + 'influencer/login/', {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log("Vendor Login", response);
      toast.success("Logged In Successfully!");
      localStorage.setItem("logToken", response.data.Token);
      localStorage.setItem("username", response.data.username);
      navigate('/dashboard')
    })
    .catch(function (error) {
      console.log(error);
      if(error.response.data.error) {
        toast.warn(error.response.data.error)
      }
    })
    .finally(() => setLoading(false));
  }
    return (
        <div className='margin-outer'>
          {loading && <div className='loader'><span></span></div>}
          <div className='container-fluid'>
            <div className="row vh-100 d-flex justify-content-center align-items-center">
              <div className='col-md-6 left-desktop'>
                <img src={login} alt="Logo" />
              </div>
              <div className='col-md-6 right-desktop'>
                <div className="content login-content">
                  <div className="col-12">
                    <div className="mb-3 mt-md-4 login-div">
                      <div className="mb-3">
                        <h3>Affiliate login</h3>
                        <Form>
                          <div className= "loginnameremove w-100">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                  Email
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="formname">
                              <Form.Label className="text-center">
                                Password
                              </Form.Label>
                              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                            </Form.Group>

                            <a href='#/forgotpassword' className='forgot-password'>Forgot Password</a>

                            <div className="d-grid">
                              <button className='button buttonfx color-1 angleindouble' variant="primary" type="submit" onClick={(e) => {handleLogin(e)}}>
                                Login
                              </button>
                            </div>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                          Haven't created an account yet? {' '}
                            <a href="#/signup" className="text-primary fw-bold">
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    ) ;
}
  
export default Login;