import React,{useState} from 'react'
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
// import rocket from "../src/rocket.png";

import {useFormik} from 'formik'

import {bookingSchema} from "../../schemas"

const initialValues ={
  email:"",
  lpassword:"",
  name:"",
  Remail:"",
  phone:"",
  Password:"",
  confirmPassword:"",
  condition:""
}

function Conditions() {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=  useFormik({
    initialValues : initialValues,
    validationSchema:bookingSchema,
    onSubmit:(value)=>{
        console.log('submit value',value);
    }
 })
  return (
    <div >
    <Form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" style={errors.email && touched.email ? {border:"2px solid red"}:{}} name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <p className="errors">{errors.email}</p>
              </Form.Group>
              <Form.Group className="mb-3 my-4" controlId="formBasicPassword">
                <Form.Control type="password" name='lpassword' id='lpassword' placeholder="Password" style={errors.lpassword && touched.lpassword ? {border:"2px solid red"}:{}} value={values.lpassword} onChange={handleChange} onBlur={handleBlur} />
                <p className="errors">{errors.lpassword}</p>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "150px",
                  color: "white",
                  background: "red",
                  border: "none",
                  borderRadius: 25,
                }}
              >
                Login
              </Button>
              <div style={{ marginTop: "20px" }}>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  Forgot Password?
                </a>
              </div>
            </Form>
    </div>
  )
}

export default Conditions
