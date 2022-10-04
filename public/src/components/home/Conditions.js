import React,{useState} from 'react'
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
// import rocket from "../src/rocket.png";

import {useFormik} from 'formik'

import {bookingSchema} from "../../schemas"

const initialValues ={
  lemail:"",
  lpassword:"",
 
}

function Conditions() {
  const formik=  useFormik({
    initialValues : initialValues,
    validationSchema:bookingSchema,
    onSubmit:(value,action)=>{
        console.log('submit value',value);
        action.resetForm();
    }
 })
  return (
    <div >
    <Form onSubmit={formik.handleSubmit} style={{ marginTop: "40px" }}>
              <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Email" style={formik.errors.lemail && formik.touched.lemail ? {border:"2px solid red"}:{}} name="lemail" value={formik.values.lemail} onChange={formik.handleChange}  />
                { formik.errors.lemail && formik.touched.lemail ? (<p className="errors">{formik.errors.lemail}</p>) : null}
              </Form.Group>
              <Form.Group className="mb-3 my-4" >
                <Form.Control type="password" name='lpassword'  placeholder="Password" style={formik.errors.lpassword && formik.touched.lpassword ? {border:"2px solid red"}:{}} value={formik.values.lpassword} onChange={formik.handleChange}  />
              { formik.errors.lpassword && formik.touched.lpassword ? (<p className="errors">{formik.errors.lpassword}</p>) : null}
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
