import React from "react";


function Accordion(props) {

    return   <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed bg-dark text-light " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        {props.name}
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p><strong>Email: </strong>{props.email}</p><strong>Message: </strong>{props.message}</div>
    </div>
  </div>
}

export default Accordion;