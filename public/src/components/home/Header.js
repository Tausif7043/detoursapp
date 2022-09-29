import React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { useState } from "react";
import img from "../img/logo.png";
function Header() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <header>
        <div className="main_menu_iner">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                  <a className="navbar-brand" href="index.html">
                    {" "}
                    <img src={img} alt="logo" />{" "}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-center"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="packages.html">
                          packages
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Blog
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="blog.html">
                            Blog
                          </a>
                          <a className="dropdown-item" href="single-blog.html">
                            Single blog
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown_1"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          pages
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown_1"
                        >
                          <a className="dropdown-item" href="top_place.html">
                            top place
                          </a>
                          <a className="dropdown-item" href="tour_details.html">
                            tour details
                          </a>
                          <a className="dropdown-item" href="elements.html">
                            Elements
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <Button
                      className="btn_1 d-none d-lg-block button1"
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Login/Sign Up
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
