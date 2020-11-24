import { withRouter, NavLink } from "react-router-dom";
import React, { useState, useRef,useEffect } from "react";
import {fadeIn, NavLinksMobile} from "../animations"
import useMediaQuery from "../../Hooks/useMediaQuery";
import "./Navigation.scss"

export default withRouter((props) => {
    const [IsChecked, setIsChecked] = useState(false);
    const mobile = useMediaQuery("(max-width: 900px)");
   
    let pathName;
    if (
      props &&
      props.history &&
      props.history.location &&
      props.history.location.pathname
    ) {
      pathName = props.history.location.pathname;
    }
  
    //Animations
    const navLinks = useRef(null)
  
    useEffect(() => {
      fadeIn(navLinks.current.childNodes)
      if(mobile) {
        
      }
    },[pathName, mobile])
    
  
    const handleClick = () => {
      setIsChecked(IsChecked ? false : true)
      NavLinksMobile(".animated-link")
    };
  
  
    return (
      <>
        <nav className="row">
          <ul ref={navLinks} className="nav-links">
            <div className="margin-right mobile-nav">
              <NavLink to="/" className="linkFix">
                <li>
                  <div className="nav-logo">
                    <p className="nav-logo-text">Vulcan</p>
                  </div>
                </li>
              </NavLink>
              <input
                id="hamburger"
                className="checkbox"
                checked={IsChecked}
                onChange={() => handleClick()}
                type="checkbox"
              />
              <label className="checkbox-label" htmlFor="hamburger"></label>
            </div>
  
            {pathName === "/"
              ? ScrollLinks.map((scrollLink, index) => (
                  <a
                    href={`#${scrollLink.to}`}
                    key={index}
                    style={{
                      display: `${
                        mobile ? (IsChecked ? "block" : "none") : "block"
                      }`,
                    }}
                    onClick={handleClick}
                    className={`linkFix nav-link-text animated-link ${
                      scrollLink.lastChild ? "last-child" : null
                    }`}
                  >
                    {scrollLink.text}
                  </a>
                ))
              : Links.map((link, index) => (
                  <NavLink
                    key={index}
                    style={{
                      display: `${
                        mobile ? (IsChecked ? "block" : "none") : "block"
                      }`,
                      color: "#fff",
                    }}
                    to={link.to}
                    onClick={handleClick}
                    className={`linkFix animated-link nav-link-text`}
                  >
                    {link.text}
                  </NavLink>
                ))}
  
            <a
              style={{
                display: `${mobile ? (IsChecked ? "block" : "none") : "block"}`,
              }}
              href={"#js-footer"}
              onClick={handleClick}
              className="linkFix nav-link-text last-child animated-link"
            >
              Contact Us
            </a>
          </ul>
        </nav>
      </>
    );
  });
  
  const ScrollLinks = [
    {
      to: "js-about-program",
      text: "About"
    },
    {
      to: "js-section-program-works",
      text: "How it Works"
    },
    {
      to: "js-apply",
      text: "Login"
    },
    {
      to: "js-apply",
      text: "Sign Up"
    },
  ];
  
  const Links = [
    {
        to: "/",
        text: "Home",
      },
  ];
  
