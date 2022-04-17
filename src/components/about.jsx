import SectionInfo from "../common/sectionInfo";
import PersonalDetail from './personalDetail';

const About = () => {
    return ( 
        <section id="about" className="about">
            <div className="container">
                <SectionInfo 
                  title="About"
                  description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." 
                />
                <PersonalDetail userInfo="" />
            </div>
        </section>
     );
}
 
export default About;