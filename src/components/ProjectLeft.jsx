import React from "react";

function ProjectLeft(props){
    return <div className="row project mx-auto">   
    
    <div className="col col-12 col-lg-6 ">
    <img className="project_img img-responsive img-thumbnail px-2 mb-5"
        src={props.img} alt=""/>
    </div>

    <div className="col col-12 col-lg-6">
        <h2 className=" mb-3">{props.title}</h2>
        <p className="project_description">{props.description}</p>
        <p>{props.techStack}</p>
        <a target="_blank" href={props.code}><button className="view_project btn  btn-md px-4 mx-2 mt-2 ">View Code</button></a>
        <a target="_blank" href={props.demo}><button className="view_project btn  btn-md px-4 mx-2 mt-2 ">View Project</button></a>
    </div>

</div>
}

export default ProjectLeft;