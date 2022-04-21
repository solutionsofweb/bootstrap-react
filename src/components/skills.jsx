import React, { Component, useEffect } from 'react';
import SectionInfo from '../common/sectionInfo';
import SkillItem from './skillItem';

class Skills extends Component {
    state = { 
      skillsContent: [
        {id: 1, skill: "html", level: 100}, 
        {id: 2, skill: "css", level: 90},
        {id: 3, skill: "javascript", level: 75}
      ]
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
                      <SkillItem key={skill.id} data={skill}/>
                    ))
                  }
                </div>
              </div>
          </section>
      );
    }  
}
 
export default Skills;