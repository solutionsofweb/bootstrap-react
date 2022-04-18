import React, { Component } from 'react';

const SocialLink = (props) => {
    const {platformLink, platformIcon} = props.data;
    const setIcon = platformIcon ? "bx bxl-" + platformIcon : "bx bxl";
    return ( 
        <a href={platformLink} className="twitter" target="_blank"><i className={setIcon} /></a>
     );
}
 
export default SocialLink;