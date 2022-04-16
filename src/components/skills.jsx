import React, { Component, useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
      let skillsContent = [{skill: "html", level: 100}, {skill: "css", level: 90}];
      
    }, [])

    return ( 
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                  <h2>Skills</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row skills-content">
                  <div className="col-lg-6" data-aos="fade-up">
                      <div className="progress">
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: "100%"}} />
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                      <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: "75%"}} />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;