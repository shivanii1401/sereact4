import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import SiteLogo from "../../src/assets/images/Logo.svg";

function NavBar() {
    const [active, setActive] = useState(false); // Use boolean instead of class names
    const [icon, setIcon] = useState(false); // Use boolean instead of class names
  
    const navToggle = () => {
      setActive(!active);
      setIcon(!icon);
    };
  
    return (
      <div>
        <nav className="nav navigation  ">
          <NavLink to="/" className="nav__brand">
            <img className="logo1" src={SiteLogo} alt="siteLogo" width={140} />
          </NavLink>
          <div onClick={navToggle} className={`nav__toggler ${icon ? "toggle" : ""}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>












          <ul className={`nav__menu ${active ? "nav__active" : ""}`}>
     
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>


          <li className="nav-item dropdown " style={{ listStyleType: "none" }}>
            <a
             
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Document Infrastructure
            </a>
            <ul className="dropdown-menu">
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/action">
                  Action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/another-action">
                  Another action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/something-else">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown " style={{ listStyleType: "none" }}>
            <a
             
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Use Cases
            </a>
            <ul className="dropdown-menu">
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/action">
                  Action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/another-action">
                  Another action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/something-else">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown " style={{ listStyleType: "none" }}>
            <a
             
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Success Stories
            </a>
            <ul className="dropdown-menu">
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/action">
                  Action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/another-action">
                  Another action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/something-else">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown " style={{ listStyleType: "none" }}>
            <a
             
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
                Resources
            </a>
            <ul className="dropdown-menu">
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/action">
                  Action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/another-action">
                  Another action
                </NavLink>
              </li>
              <li style={{ listStyleType: "none" }}>
                <NavLink className="dropdown-item text-dark" to="/something-else">
                  Something else here
                </NavLink>
              </li>
            </ul>
          </li>
        
        
        

          <li className="nav__item">
            <NavLink to="/pricing" className="nav__link">
              Pricing
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/culture" className="nav__link">
              Culture
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link">
              Contact 
            </NavLink>
          </li>


















          <li className="nav__item loginbtn1">
            <NavLink to="/login" className="nav__link" id="loginbtn">
              Login
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/signup" className="nav__link" id="signupbtn">
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
