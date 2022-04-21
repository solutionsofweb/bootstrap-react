import React, { Component } from "react";
import axios from "axios";
import SocialLink from "./socialLink";

class SideBar extends Component {
    state = { 
        socialLinks: []
    } 

    async componentDidMount(){
        const {data} = await axios.get('http://127.0.0.1:8000/plateForms');
        const links = this.state.socialLinks;
        const socialLinks = [...links, data];
        this.setState({socialLinks});
    }
    render() { 
        return ( 
            <React.Fragment >
                <i className="bi bi-list mobile-nav-toggle d-xl-none" />
                {/* ======= Header ======= */}
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="assets/img/profile-img.jpg" alt className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                            <div className="social-links mt-3 text-center">
                                {
                                    this.state.socialLinks.map(platform => (
                                        <SocialLink key={platform.icon} data={platform} />
                                    ))
                                }
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
}
 
export default SideBar;