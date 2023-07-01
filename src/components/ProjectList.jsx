import textUtils from "../images/textUtils.png"
import newsApp from "../images/newsApp.png";
import onlineLibrary from "../images/onlineLibrary.png";
import portfolio from "../images/portfolio.png"

const ProjectList = [
    {
        key: 0,
        title: "PortFolio App (MERN STACK)",
        description: "An interactive portFolio website which showcases all my works such as my education, projects, skills at one place with some visual treat. This website contains several sections which can be easily navigated through navigation bar provided, and also contains a contact section to contact me if required.",
        tech: "Tech Stack Used: ReactJS, MongoDB, ExpressJS, NodeJS",
        image: portfolio,
        code: "https://github.com/ShaikAleemAhamed123/portfolioreactapp",
        project: "https://aleemahameds-portfolio.netlify.app/"
    },
    {
        key: 1,
        title: "News App - React App",
        description: "This is a real-time news app which fetches news from newsAPI and displays news. This app contains various categories of news which can be chosen and it displays the news related to it.This app is built using ReactJS technology using newsAPI as API to provide real-time news for the app.",
        tech: "Tech Stack Used: ReactJS, newsAPI, NodeJS, ExpressJS, BootStrap",
        image: newsApp,
        code: "https://github.com/ShaikAleemAhamed123/newsApp-ReactApp",
        project: "https://shaikaleemahamed123.github.io/newsApp-ReactApp/"

    },
    {
        key: 2,
        title: "Text Utilities React App",
        description: "This is a text Utilities app which can be used to format our text such as Capitalising letters, converting letters to lower case, Removing extra spaces (or trailing and leading spaces). Along with formatting this app shows the Count of Words, characters and estimated Reading Time of the entered text.",
        tech: "Tech Stack Used: ReactJS, Bootstrap, NodeJS",
        image: textUtils,
        code: "https://github.com/ShaikAleemAhamed123/textUtils",
        project: "https://textutils-git.netlify.app"
    },
    {
        key: 3,
        title: "Online Library Management",
        description: "This project is made as a part of our Univeristy Term project.This Project reflects the skeleton structure of how an online library is managed. This is built Using some of the best features of JAVA OOPs such as INHERITANCE, INTERFACE, CLASSES, Static Keywords. Data Structures such as ArrayList, List are also used to make the Project more Real.",
        tech: "Tech Stack Used: Java",
        image: onlineLibrary,
        code: "https://github.com/ShaikAleemAhamed123/Online_Library_Management",
        project: "https://github.com/ShaikAleemAhamed123/Online_Library_Management"
    }
];
export default ProjectList;