import React, { Component } from 'react';

const FactItem = (props) => {
    const textArray = props.itemText.split(',');
    
    return ( 
        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                <p><strong>{textArray[0]}</strong>{textArray[1]}</p>
            </div>
        </div>
     );
}
 
export default FactItem;