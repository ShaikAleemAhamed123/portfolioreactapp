import React from "react";
function Skill(props) {
    return <div className="skill col col-12 col-md-6 col-lg-4 md-3 ">
        <div className="d-flex flex-row align-items-center justify-content-between py-3">
            <p className="skill-heading">{props.title}</p>
            <img className="rounded-circle z-depth-2" style={{ maxHeight: "90px", maxWidth: "90px" }} src={props.image} alt="Loading" />
        </div>

        <div>{props.description}</div>
    </div>
}

export default Skill;



