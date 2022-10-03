import "../../App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import rocket from "../src/rocket.png";
import { IoMdRocket } from "react-icons/io";
import { useFormik } from "formik";

import { bookingSchema } from "../../schemas";
import Conditions from "./Conditions";
// import {useHistory} from 'react-router-dom'

const initialValues = {
  email: "",
  lpassword: "",
  name: "",
  Remail: "",
  phone: "",
  password: "",
  confirmPassword: "",
  condition: "",
};

function MyVerticallyCenteredModal(props) {
  // const signUp=()=>{
  // const history = useHistory()
  const [user, setUser] = useState({
      email: "",
      lpassword: "",
      name: "",
      Remail: "",
      phone: "",
      Password: "",
      confirmPassword: "",
      condition: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // }

  let postData = async (e) => {
    e.preventDefault();
    const {
      email,
      lpassword,
      name,
      Remail,
      phone,
      Password,
      confirmPassword,
      condition,
    } = user;

    let res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    res = await res.json();
    if (res.status === 422) {
      window.alert("invalid registretion");
      console.log("invalid registretion");
    } else {
      window.alert(" registretion successfull");
      console.log(" registretion successfull");
      //  history.push("/login")
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: bookingSchema,
      onSubmit: (value) => {
        console.log("submit value", value);
      },
    });

  const [condition, setCondtion] = useState("demo");
  const checkCondition = () => {
    setCondtion("conditionBox");
  };
  const removeondition = () => {
    setCondtion("demo");
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="conditionContainer">
            <div className={`${condition}`}>
              <h3 className="text-right" onClick={removeondition}>
                X
              </h3>
              <h1 className="text-center">Terms And Condition</h1>
            </div>
          </div>
          <div style={{ display: "flex", height: "80vh" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "80%",
                background: "black",
                position: "absolute",
                top: "28%",
                left: "47%",
              }}
            >
              <IoMdRocket color="white" size={30} style={{ margin: 10 }} />
            </div>
            <div
              style={{ backgroundColor: "white", padding: 60, width: "50%" }}
            >
              <h2 style={{ textAlign: "center" }}>Login</h2>
              <Conditions />
            </div>
            <div style={{ backgroundColor: "red", padding: 60, width: "50%" }}>
              <h2 style={{ textAlign: "center", color: "white" }}>Register</h2>
              <Form
                method="POST"
                onSubmit={handleSubmit}
                style={{ marginTop: "40px" }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    style={
                      errors.name && touched.name
                        ? { border: "2px solid yellow" }
                        : {}
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="errorsReg">{errors.name}</p>
                </Form.Group>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Id"
                    name="Remail"
                    id="Remail"
                    value={values.Remail}
                    style={
                      errors.Remail && touched.Remail
                        ? { border: "2px solid yellow" }
                        : {}
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="errorsReg">{errors.Remail}</p>
                </Form.Group>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    type="phone"
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    style={
                      errors.phone && touched.phone
                        ? { border: "2px solid yellow" }
                        : {}
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="errorsReg">{errors.phone}</p>
                </Form.Group>

                <Form.Group className="mb-3 my-4" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="Password"
                    id="Password"
                    value={values.Password}
                    style={
                      errors.Password && touched.Password
                        ? { border: "2px solid yellow" }
                        : {}
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="errorsReg">{errors.Password}</p>
                </Form.Group>

                <Form.Group className="mb-3 my-4" controlId="formBasicPassword">
                  <Form.Control
                    type="confirmpassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    style={
                      errors.confirmPassword && touched.confirmPassword
                        ? { border: "2px solid yellow" }
                        : {}
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="errorsReg">{errors.confirmPassword}</p>
                </Form.Group>

                <Form.Group className="mb-3 mx-4" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="condition"
                    id="condition"
                    value={values.condition}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  <a className="text-light" onClick={checkCondition}>
                    Terms & Conditions
                  </a>
                  <p className="errorscondition">{errors.condition}</p>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={postData}
                  style={{
                    width: "150px",
                    color: "red",
                    background: "white",
                    border: "none",
                    borderRadius: 25,
                  }}
                >
                  Register
                </Button>
                <div style={{ marginTop: "20px" }}>
                  <a
                    href="#"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Forgot Password?
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
