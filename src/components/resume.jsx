import SectionInfo from "../common/sectionInfo";
import Education from "./education";
import Experience from './experience';

const Resume = () => {
    const educations = [
        {degree: "BSIT", duration: "2012 - 2015", institute: "University of Agriculture, Peshawar, PK", marks: 82},
        {degree: "F.Sc Pre Engineering", duration: "2010 - 2011", institute: "BISE, Peshawar, PK", marks: 64},
        {degree: "SSC", duration: "2007 - 2009", institute: "BISE, Peshawar, PK", marks: 60}
    ];
    const experiences = [
        {role: "Software Engineer", duration: "2021 - Present", company: "Pixako Technologies, Islamabad, PK"},
        {role: "Sr. PHP Developer", duration: "2020 - 2021", company: "Xymax Technologies, Islamabad, PK"},
        {role: "Web Developer", duration: "2017 - 2020", company: "Logics Builder, Peshawar, PK"},
        {role: "PHP Developer", duration: "2018 - 2019", company: "Cyber Clouds, Miami, FL"}
    ];
    return ( 
        <section id="resume" className="resume">
            <div className="container">
                <SectionInfo 
                  title="Resume"
                  description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." 
                />
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        {
                            educations.map(education => (
                                <Education education={education}/>
                            ))
                        }
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">Professional Experience</h3>
                        {
                            experiences.map(experience => (
                                <Experience experience={experience}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Resume;