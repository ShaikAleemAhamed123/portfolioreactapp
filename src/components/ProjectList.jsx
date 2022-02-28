import React from "react";
// import ProjectImages from "./ProjectImages";
import textUtils from "../images/textUtils.png"
import newsApp from "../images/newsApp.png";
import onlineLibrary from "../images/onlineLibrary.png";

const ProjectList = [
    {
        key:0,
        title: "Text Utilities React App",
        description: "This is a text Utilities app which can be used to format our text such as Capitalising letters, converting letters to lower case, Removing extra spaces (or trailing and leading spaces). Along with formatting this app shows the <strong>Count of Words, characters and estimated Reading Time </strong> of the entered text.",
        techStack:"Tech Stack Used: HTML, CSS, JS, ReactJS",
        img: textUtils,
        code: "https://github.com/ShaikAleemAhamed123/textUtils",
        demo: "https://textutils-git.netlify.app"
    },
    {
        key:1,
        title: "News App - React App",
        description: "This is a real-time news app which fetches news from newsAPI and displays news. This app contains various categories of news which can be chosen and it displays the news related to it.This app is built using ReactJS technology using newsAPI as API to provide real-time news for the app.",
        techStack:"Tech Stack Used: HTML, CSS JS, BootStrap, ReactJS, newsAPI",
        img: newsApp,
        code: "https://github.com/ShaikAleemAhamed123/newsApp-ReactApp",
        demo: "https://shaikaleemahamed123.github.io/newsApp-ReactApp/"
    },
    {
        key:2,
        title: "Online Library Management",
        description: "This project is made as a part of our Univeristy Term project.This Project reflects the skeleton structure of how an online library is managed. This is built Using some of the best features of JAVA OOPs such as INHERITANCE, INTERFACE, CLASSES, Static Keywords. Data Structures such as ArrayList, List are also used to make the Project more Real.",
        techStack:"Tech Stack Used: Java",
        img:  onlineLibrary,
        code: "https://github.com/ShaikAleemAhamed123/Online_Library_Mana",
        demo: "#"
    }
];
export default ProjectList;