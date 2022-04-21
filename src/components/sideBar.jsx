import React, { Component } from "react";
import SocialLink from "./socialLink";

const SideBar = (props) => {
    return ( 
        <React.Fragment >
            <i className="bi bi-list mobile-nav-toggle d-xl-none" />
            {/* ======= Header ======= */}
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                        <div className="social-links mt-3 text-center">
                            <SocialLink  />
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                        </ul>
                    </nav>{/* .nav-menu */}
                </div>
            </header>{/* End Header */}
        </React.Fragment>
     );
}
 
export default SideBar;
