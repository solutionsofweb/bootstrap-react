import React, { Component, useEffect } from 'react';
import SectionInfo from '../common/sectionInfo';

class Skills extends Component {
    state = { 
      skillsContent: [{skill: "html", level: 100}, {skill: "css", level: 90}]
    } 

    render(){
      return ( 
          <section id="skills" className="skills section-bg">
              <div className="container">
                <SectionInfo 
                  title="Skills"
                  description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." 
                />
                <div className="row skills-content">
                  {
                    this.state.skillsContent.map(skill => (
                      <div key={skill.skill} className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                          <span className="skill">{skill.skill} <i className="val">{`${skill.level}%`}</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow={skill.skill} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.level}%`}} />
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
          </section>
      );
    }  
}
 
export default Skills;