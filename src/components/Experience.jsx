import React from "react";

function Experience(props) {
  if (props.index % 2 === 0) {
    return <div className="experience-container left">
      <div className="content">
        <h2>{props.title}</h2>
        <h5>{props.time}</h5>
        <p>{props.role}</p>
        <ul>
          <li>{props.des1}</li>
          <li>{props.des2}</li>
        </ul>
      </div>
    </div>
  }
  else {
    return <div className="experience-container right">
      <div className="content">
        <h2>{props.title}</h2>
        <h5>{props.time}</h5>
        <p>{props.role}</p>
        <ul>
          <li>{props.des1}</li>
          <li>{props.des2}</li>
        </ul>
      </div>
    </div>
  }

}

export default Experience;