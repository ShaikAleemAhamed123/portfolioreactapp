import React from "react";

function Education(props) {

    return <div className="edu col-md-12 col-lg-4">
        <i className={`edu_icons  fas fa-3x ${props.icon}`}></i>
        <p>{props.institution}</p>
        <p>{props.course}</p>
        <p style={{ fontWeight: "bold" }}>{props.grade}</p>
    </div>
  

}

export default Education;