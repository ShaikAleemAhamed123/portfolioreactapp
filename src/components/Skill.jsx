import React from "react";
function Skill(props){
    return <div className="skill col col-12 col-md-6 col-lg-4 md-3 ">
    <p className="skill-heading">{props.title}</p>
    <div>{props.description}</div>
</div>
}

export default Skill;



 