import "../../App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import rocket from "../src/rocket.png";
import { IoMdRocket } from "react-icons/io";

function MyVerticallyCenteredModal(props) {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{ display: "flex", height: "70vh" }}>
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
          <div style={{ backgroundColor: "white", padding: 60, width: "50%" }}>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <Form style={{ marginTop: "40px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
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
          <div style={{ backgroundColor: "red", padding: 60, width: "50%" }}>
            <h2 style={{ textAlign: "center", color: "white" }}>Register</h2>
            <Form style={{ marginTop: "40px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Id" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="phone" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="confirmpassword"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              
              <Form.Group className="mb-3 mx-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  /> <a>Terms & Conditions</a>
      </Form.Group>

              <Button
                variant="primary"
                type="submit"
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
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Forgot Password?
                </a>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal