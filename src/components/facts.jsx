import SectionInfo from "../common/sectionInfo";
import FactItem from "./factItem";

const Facts = () => {
    const factItems = [
        {id: 1, text: "Happy Clients, consequuntur quae", icon: "emoji-smile"},
        {id: 2, text: "Projects, adipisci atque cum quia aut", icon: "journal-richtext"},
        {id: 3, text: "Hours Of Support, aut commodi quaerat", icon: "headset"},
        {id: 4, text: "Hard Workers, rerum asperiores dolor", icon: "people"}
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
                            <FactItem key={item.id} data={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Facts;