import React, { Component, useEffect } from 'react';
import Typed from "typed.js";

const Home = () => {

    useEffect(() => {
        let strings  = ["Designer", "Developer", "Freelancer", "Photographer"];
        let options = {
            strings: strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        };
        let typed = new Typed('.typed', options);
        
    }, [])

    return ( 
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Alex Smith</h1>
                <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
            </div>
        </section>
     );
}
 
export default Home;