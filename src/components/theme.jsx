import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config.json';

class Theme extends Component {
    state = {  } 
    async componentDidMount(){
        const {data} = await http.get(config.baseUrl + '/plateForms');
        console.log('back data  ',data);
    }
    render() { 
        return (
            <div className="">
                <h1 >Hello React</h1>
            </div>
        );
    }
}
 
export default Theme;