// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import validator from "validator";
// import Select from 'react-select';

// // creating functional component ans getting props from app.js and destucturing them
// const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
//    //creating error state for validation
//   const [error, setError] = useState(false);

//     // after form submit validating the form data using validator
//   const submitFormData = (e) => {
//     e.preventDefault();

//      // checking if value of first name and last name is empty show error else take to next step
//     if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
//       setError(true);
//     } else {
//       nextStep();
//     }
//   };
// // checking country
// const [industries, setIndustries] = useState('')
// const options = [
//   {
//     value: 'one',
//     label: 'One'
//   },
//   {
//     value: 'two',
//     label: 'Two'
//   },
//   {
//     value: 'three',
//     label: 'Three'
//   },
// ]

// const changeHandler = industries => {
//   setIndustries(industries)
// }

//   // checking country
//   console.log("FormData", industries)
//   return (
//     <Form onSubmit={submitFormData} className="second-step">
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Industry</Form.Label>
//         <Select options={options} value={industries} onChange={changeHandler} placeholder="Choose Industry"/>
//       </Form.Group>
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Expreience</Form.Label>
//         <Form.Control
//           style={{ border: error ? "2px solid red" : "" }}
//           type="number"
//           placeholder="Expreience"
//           onChange={handleFormData("age")}
//         />
//         {error ? (
//           <Form.Text style={{ color: "red" }}>
//             This is a required field
//           </Form.Text>
//         ) : (
//           ""
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Promotion</Form.Label>
//         <Form.Control
//           style={{ border: error ? "2px solid red" : "" }}
//           type="number"
//           placeholder="Promotion"
//           onChange={handleFormData("age")}
//         />
//         {error ? (
//           <Form.Text style={{ color: "red" }}>
//             This is a required field
//           </Form.Text>
//         ) : (
//           ""
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Age</Form.Label>
//         <Form.Control
//           style={{ border: error ? "2px solid red" : "" }}
//           type="number"
//           placeholder="Age"
//           onChange={handleFormData("age")}
//         />
//         {error ? (
//           <Form.Text style={{ color: "red" }}>
//             This is a required field
//           </Form.Text>
//         ) : (
//           ""
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Gender</Form.Label>
//         <Form.Control
//           style={{ border: error ? "2px solid red" : "" }}
//           type="text"
//           placeholder="Gender"
//           onChange={handleFormData("email")}
//         />
//         {error ? (
//           <Form.Text style={{ color: "red" }}>
//             This is a required field
//           </Form.Text>
//         ) : (
//           ""
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3 input-container">
//         <Form.Label>Location</Form.Label>
//         <Form.Control
//           style={{ border: error ? "2px solid red" : "" }}
//           type="text"
//           placeholder="Location"
//           onChange={handleFormData("email")}
//         />
//         {error ? (
//           <Form.Text style={{ color: "red" }}>
//             This is a required field
//           </Form.Text>
//         ) : (
//           ""
//         )}
//       </Form.Group>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <Button variant="primary" onClick={prevStep}>
//           Previous
//         </Button>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </div>
//     </Form>
//   );
// };

// export default StepTwo;