import React, { Component } from 'react';

const SocialLink = (props) => {
    const icon = props.data[0].icon;
    const setIcon = icon ? "bx bxl-" + icon : "bx bxl";
    return ( 
        <a href="#" className="twitter" target="_blank"><i className={setIcon} /></a>
     );
}
 
export default SocialLink;