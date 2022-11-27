import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro"
import ProjectList from "./ProjectList";
import ProjectRight from "./ProjectRight";
import ProjectLeft from "./ProjectLeft";
import EducationList from "./EducationList";
import Education from "./Education";
import SkillList from "./SkillList";
import Skill from "./Skill";
import Experiece from "./Experience";
import ExperienceList from "./ExperienceList";
import Contact from "./Contact";
import Footer from "./Footer";
import AccordionList from "./AccordionList";
import TopScrollBar from "./TopScrollBar";
import loader from "./Spinner.gif"
import Backend from "./Backend"
import Opentowork from "./Opentowork";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  // const [skills, setSkills] = useState([]);
  // const [educations, setEducations] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [experiences, setExperiences] = useState([]);


  // useEffect(() => {
  //   axios.get("https://portfolioreactapp-backend.onrender.com/skills")
  //     .then((res) => {
  //       console.log(res);
  //       setSkills(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios.get("https://portfolioreactapp-backend.onrender.com/educations")
  //     .then((res) => {
  //       console.log(res);
  //       setEducations(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios.get("https://portfolioreactapp-backend.onrender.com/projects")
  //     .then((res) => {
  //       console.log(res);
  //       setProjects(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios.get("https://portfolioreactapp-backend.onrender.com/experiences")
  //     .then((res) => {
  //       console.log(res);
  //       setExperiences(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }, []);
  return (<div>

    <Router>
      <Routes>
        <Route exact path="/" element={
          <div>
            <TopScrollBar />
            <Navbar />


            <Intro />

            <section className="row education mt-4 ">
              <h3>EDUCATION</h3>
              {EducationList.map((eduItem, index) => {
                return <Education image={eduItem.image} key={index} title={eduItem.title} grade={eduItem.grade} degree={eduItem.degree} />
              })}
            </section>
            <hr className="breakline mx-auto mt-5" />

            <section className="row skills mt-4">
              <h3>SKILL-SET</h3>
              {SkillList.map((skill, index) => {
                console.log(skill.image)
                return <Skill key={index} title={skill.title} description={skill.description} image={skill.image} />
              })}
            </section>
            <div id="Projects"></div>
            <hr className="breakline mx-auto mt-5" />



            <section className="projects">
              <h3>PROJECTS</h3>
              {ProjectList.map((project, index) => {
                if (index % 2 === 0) {
                  return <ProjectRight key={index} title={project.title} description={project.description} techStack={project.tech} img={project.image} code={project.code} demo={project.project} />
                }
                else {
                  return <ProjectLeft key={index} title={project.title} description={project.description} techStack={project.tech} img={project.image} code={project.code} demo={project.project} />
                }
              })}
            </section>
            <hr className="breakline mx-auto mt-5" />
            <div id="Experience"></div>

            <section className="experience">
              <h3>EXPERIENCE</h3>
              <div className="exeriences timeline">
                {ExperienceList.map((exp, index) => {
                  return <Experiece key={index} index={index} title={exp.title} role={exp.role} time={exp.time} des1={exp.description1} des2={exp.description2} />

                })}
              </div>

            </section>
            <hr className="breakline mx-auto mt-5" />
            <h3 className="openToWorkHeading" style={{ color: "#69ff00" }}># Open To Work</h3>
            <Opentowork />

            <hr className="breakline mx-auto mt-5" />
            <div id="Contact"></div>
            <section className="contact">
              <h3>Contact Me....</h3>
              <p className="text mb-5" style={{ color: "rgb(184 184 184 / 78%)", fontWeight: "bolder" }}>Interested in working with me :) or wanna meet up for some chitchat? I love meeting and working with new people. Hit me up through the form below.</p>

              <Contact />
            </section>
            <hr className="breakline mx-auto mt-5"></hr>

            <Footer />
          </div>
        } />
        <Route exact path="/messages" element={
          <div>
            <TopScrollBar />
            <h1 className="container text-center text-light mt-5">Messages</h1>
            <AccordionList /></div>
        } />
        <Route exact path="/backend" element={
          <div>
            <Backend />
          </div>
        } />
      </Routes>
    </Router>
  </div>
  );
}

export default App;