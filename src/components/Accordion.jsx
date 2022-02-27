import React from "react";


function Accordion(props) {

    return   <div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading">
      <button className="accordion-button collapsed bg-dark text-light " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="false" aria-controls="flush-collapse">
        {props.name}
      </button>
    </h2>
    <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p><strong>Email: </strong>{props.email}</p><strong>Message: </strong>{props.message}</div>
    </div>
  </div>
}

export default Accordion;