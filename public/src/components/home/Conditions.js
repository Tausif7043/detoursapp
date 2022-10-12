import React,{useState , useEffect} from 'react'
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
// import rocket from "../src/rocket.png";
import en from "../../localization/en";
import {useFormik} from 'formik'
import axios from "axios";
import {json, useNavigate} from "react-router-dom"


const initialValues ={
  email:"",
  password:"",
 
}

function Conditions(props) {
  const navigate = useNavigate()

  const [user, setUser] = useState({ 
    email: "",
    password: "",
    
  });


  const logData = () => {
    axios
      .post("http://localhost:5000/api/auth/login", values)
      .then((res) => {
       props.setLog(res.data.user)
        navigate('/', { replace: true })
        localStorage.setItem('logInData',JSON.stringify(res.data.user))
     
      })
      .catch((err) => {console.log("err", err.response.data.message);});
     
    };
 
  const validation = Yup.object({
    
    email: Yup.string().email(en.emailValidation).required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .required("Required"), 
  });

  
 const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
 useFormik({
   initialValues: initialValues,
   validationSchema: validation,
   onSubmit: (value) => {
    logData();
     setUser(value);
     props.log()
    
     //  action.resetForm()
   },
 });
  return (
    <div >
   
    <Form method="POST" onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
              <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Email" style={errors.email && touched.email ? {border:"2px solid red"}:{}} name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  />
                { errors.email && touched.email ? (<p className="errors">{errors.email}</p>) : null}
              </Form.Group>
              <Form.Group className="mb-3 my-4" >
                <Form.Control type="password" name='password'  placeholder="Password" style={errors.password && touched.password ? {border:"2px solid red"}:{}} value={values.password} onChange={handleChange}  onBlur={handleBlur} />
              { errors.password && touched.password ? (<p className="errors">{errors.password}</p>) : null}
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
