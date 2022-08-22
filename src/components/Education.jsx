import React from "react";

function Education(props) {

    return <div className="edu col-md-12 col-lg-4">
        <i className={`edu_icons  fas fa-3x ${props.image}`}></i>
        <p>{props.title}</p>
        <p>{props.degree}</p>
        <p style={{ fontWeight: "bold" }}>{props.grade}</p>
    </div>


}

export default Education;