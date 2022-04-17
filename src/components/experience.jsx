const Experience = (props) => {
    const {experience} = props;
    return ( 
        <div className="resume-item">
            <h4>{experience.role}</h4>
            <h5>{experience.duration}</h5>
            <p><em>{experience.company}</em></p>
        </div>
     );
}
 
export default Experience;