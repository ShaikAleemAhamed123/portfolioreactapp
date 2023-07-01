import React from "react";
import Spinner from './Spinner.gif'
import resume from "../images/resume.png"

function Opentowork() {

    return <section className="Opentowork" id="download">
        <div className=" container inner">
            {/* <p className="text"><span className="bold" style={{color: "rgb(255 255 255 / 78%)",fontWeight:"bolder",fontSize:"1.5rem"}}>** I am actively looking for summer internship opportunities. **</span><br /><br />If you are hiring or willing to collaborate with me on any project, please keep a copy of my latest resume for reference and feel free to contact me through my mentioned Contact Number or any of my Social Media Handles.
            </p> */}
            <div>
                <img className="img-fluid resume-image" src={resume} alt="" />
            </div>

            <a target="_blank" href="https://drive.google.com/file/d/17uP64AwpO_L-kER2qxRejsJmaDgUeHw-/view?usp=sharing"> <button className="btn  btn-md px-4 mx-2 mt-5 ">Download Resume</button></a>
            {/* <i className="fa fa-download"></i> */}
        </div>
    </section>

}

export default Opentowork;