const SkillItem = (props) => {
    const {data: skill} = props;
    return ( 
        <div key={skill.skill} className="col-lg-6" data-aos="fade-up">
            <div className="progress">
                <span className="skill">{skill.skill} <i className="val">{`${skill.level}%`}</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={skill.skill} aria-valuemin={0} aria-valuemax={100} style={{width: `${skill.level}%`}} />
                </div>
            </div>
        </div>
     );
}
 
export default SkillItem;