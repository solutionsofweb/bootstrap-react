import SectionInfo from "../common/sectionInfo";
import FactItem from "./factItem";

const Facts = () => {
    const factItems = [
        {text: "Happy Clients, consequuntur quae", icon: "emoji-smile"},
        {text: "Projects, adipisci atque cum quia aut", icon: "journal-richtext"},
        {text: "Hours Of Support, aut commodi quaerat", icon: "headset"},
        {text: "Hard Workers, rerum asperiores dolor", icon: "people"}
    ];
    return ( 
        <section id="facts" className="facts">
            <div className="container">
                <SectionInfo 
                  title="Facts"
                  description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." 
                />
                <div className="row no-gutters">
                    {
                        factItems.map(item => (
                            <FactItem data={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Facts;