import tesla1 from "../Images/tesla1.jpeg";
import tesla2 from "../Images/tesla2.jpeg";
import tesla3 from "../Images/tesla3.jpeg";
import tesla4 from "../Images/tesla4.jpeg";
import tesla5 from "../Images/tesla5.jpeg";
import c3i from "../Images/c3i.jpeg";
import c3igrp from "../Images/c3igrp.jpeg";
import iskcon from "../Images/iskcon.jpeg";

export default function Activities(){
    return (
        <div className="activities">
            <h1 className="subheading">Tesla hands-on workshop</h1>
            <img src={tesla1}/>
            <img src={tesla2}/>
            <img src={tesla3}/>
            <img src={tesla4}/>
            <img src={tesla5}/>
            <h1 className="subheading">At C3i Hub IIT Kanpur</h1>
            <img src={c3i}/>
            <img src={c3igrp}/>
            <h1 className="subheading">ISKCON</h1>
            <img src={iskcon}/>
        </div>
    )
}