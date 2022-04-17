
const Education = (props) => {
    const {education} = props;
    return ( 
        <div className="resume-item">
            <h4>{education.degree}</h4>
            <h5>{education.duration}</h5>
            <p><em>{education.institute}</em></p>
            <p>CGPA: {`${education.marks}%`}</p>
        </div>
     );
}
 
export default Education;