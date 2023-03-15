
import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

import logo from '../assets/logo.png';
import signup from '../assets/signup.jpg';

function Signup (){
    return (
   <>
    <div className='pt-110pb-68'>
    <div className="container">
    <div className="row vh-100 d-flex justify-content-center align-items-center">
           

    <div className='col-md-4'>
    <img src={signup} alt="Logo" />
        </div>
           
          <div className='col-md-8'>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <div className="site-logo">
                    <a href="/">
                  <img src={logo} alt="Logo" />
                  </a>
                  </div>
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="/" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
</div>

   </>
    ) ;
}
  
export default Signup;