import React, { Component } from 'react';

import SideBar from './sideBar'
import Home from './home';
import About from './about';
import Facts from './facts';
import Skills from './skills';
import Resume from './resume';
import Services from './services';
import Contact from './contact';
import Footer from './footer';
import BackToTop from './backToTop';
import http from '../services/httpService'
import config from '../config.json';

class Theme extends Component {
    state = { 
        socialLinks: []
    } 
    async componentDidMount() {
        const {data} = await http.get(config.baseUrl +'plateForms');
        const {socialLinks} = this.state;
        this.setState({socialLinks: [...socialLinks, data]});
        console.log('hi');
    }
    render() { 
        return (
            <div>
                <SideBar links={this.state.socialLinks}/>
                <Home />
            
                <main id="main">
                <About />
                <Facts />
                <Skills />
                <Resume />
                <Services />
                <Contact />
                </main>
                <Footer />
                <BackToTop />
            </div>
        );
    }
}
 
export default Theme;