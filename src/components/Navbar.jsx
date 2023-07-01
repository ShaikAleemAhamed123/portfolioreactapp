import React from "react";
import me from "../images/me.png"

function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={me} className=" me rounded-circle " alt="Aleem's" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#Education">Education</a>
                    </li>
                    <li className="nav-item me-4">
                        <a target="_blank" className="nav-link" href="https://drive.google.com/file/d/17uP64AwpO_L-kER2qxRejsJmaDgUeHw-/view?usp=sharing">Resume</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#Experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;