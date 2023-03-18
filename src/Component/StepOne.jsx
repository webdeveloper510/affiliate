
import React, { useState, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import validator from "validator";
import Select from 'react-select';
import countryList from 'react-select-country-list'
// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };


  // checking country
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }


    // checking country
  return (
    <div>
   
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                defaultValue={values.Email}
                type="email"
                placeholder="Enter Email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="password"
                defaultValue={values.password}
                type="password"
                placeholder="Password"
                onChange={handleFormData("password")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="Confirmpassword"
                defaultValue={values.Confirmpassword}
                type="password"
                placeholder="Confirm Password"
                onChange={handleFormData("Confirm password")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Country</Form.Label>
              <Select options={options} value={value} onChange={changeHandler} placeholder="Choose your country"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>

       
    </div>
  );
};

export default StepOne;