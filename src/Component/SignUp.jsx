
import React , { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";
import signup from '../assets/sign1.webp';

function Signup (){

   //state for steps
   const [step, setstep] = useState(1);

   //state for form data
   const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     age: "", 
     email: ""
   })
 
   // function for going to next step by increasing step state by 1
   const nextStep = () => {
     setstep(step + 1);
   };
 
   // function for going to previous step by decreasing step state by 1
   const prevStep = () => {
     setstep(step - 1);
   };
 
   // handling form input data by taking onchange value and updating our previous form data state
   const handleInputData = input => e => {
     // input value from the form
     const {value } = e.target;
 
     //updating for data state taking previous state and then adding new value to create new object
     setFormData(prevState => ({
       ...prevState,
       [input]: value
   }));
   }
 
 
 // javascript switch case to show different form in each step

 const project = () => {
   switch (step) {
     // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
     case 1:
       return (
       
               <Col  className="custom-margin">
                 <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
               </Col>
             
       );
     // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
     case 2:
       return (
         
               <Col  className="custom-margin">
                 <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
               </Col>
            
       );
       // Only formData is passed as prop to show the final value at form submit
     case 3:
       return (
        
               <Col  className="custom-margin">
                 <Final values={formData}  />
               </Col>
             
       );
     // default case to show nothing
     default:
       return (
         <div className="App">
         </div>
       );
   }
  }
  return (
    <div className='margin-outer-signup'>
    <div className='container-fluid'>
    <div className="row vh-100 d-flex justify-content-center align-items-center">
      
    <div className='col-md-6 left-desktop'>
        <img src={signup} alt="Logo"  style={{"width" : "50%"}} />
            </div>

            <div className='col-md-6 right-desktop'>
                <div className="content">
                    <div className="col-xs-12 col-md-8">
              
                    <div className="mb-3 mt-md-4 login-div">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      <div className="site-logo">
                        <a href="/">
                      <img src={logo} alt="Logo"/>
                      </a>
                      </div>
                      </h2>

                           {step}

                           <h3>Affiliate signup</h3>
                           <p>Sign up as affiliate to join our Marketplace and apply for the most competitive offers from our Shopify merchant!</p>
                            { project() }
                            <div className="mt-3">
                          <p className="mb-0  text-center">
                           Haven't created an account yet? {' '}
                            <a href="#/signup" className="text-primary fw-bold">
                              Sign In
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
  )

}
  
export default Signup;