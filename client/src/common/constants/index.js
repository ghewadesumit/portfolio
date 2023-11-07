import css3 from "../../assets/img/css3.svg"
import git from "../../assets/img/git.svg"
import react from "../../assets/img/react.svg"
import angular from "../../assets/img/angular.svg"
import javascript from "../../assets/img/javascript.svg"
import typescript from "../../assets/img/typescript.svg"
import node from "../../assets/img/nodejs.svg"
import mysql from "../../assets/img/mysql.svg"
import redux from "../../assets/img/redux.svg"

import eCommerce from "../../assets/img/ecommerce.png"
import grandHotel from "../../assets/img/grand_hotel.png"
import hamburgerMenu from "../../assets/img/hamburger_menu.png"

import invisibleCard from "../../assets/img/invisible_card.png"
import customSignupForm from "../../assets/img/custom_signup.png"
import furnitureStore from "../../assets/img/furniture_store.png"

import ticTacToe from "../../assets/img/tic-tac-toe.png"

import profileCard from "../../assets/img/profile_card.png"
import projImg3 from "../../assets/img/project-img3.png"

export const projects = [
  {
    title: "E-commerce Website",
    description: "Stack: React, Redux, JS, Node, Express",
    isProjectLive: false,
    projectUrl: "https://crwn-sumoz-live.herokuapp.com/",
    imgUrl: eCommerce,
  },
  {
    title: "DevConnecter",
    description: "Stack: React, Redux, JS, Node, Express, MongoDB",
    isProjectLive: true,
    projectUrl: "https://developerconnect.netlify.app/",
    imgUrl: projImg3,
  },
  {
    title: "Tic-Tac-Toe",
    description: "Stack: React, JS, CSS",
    isProjectLive: false,
    projectUrl: "https://tic-tac-toe-sumoz.herokuapp.com/",
    imgUrl: ticTacToe,
  },
  {
    title: "Furniture Store",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/Furniture-Store/#",
    imgUrl: furnitureStore,
  },
  {
    title: "Custom Sign-up Form",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/Sumoz-Sign-Up-Form/",
    imgUrl: customSignupForm,
  },
  {
    title: "Hamburger Menu",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/sumoz-hamburger-menu/",
    imgUrl: hamburgerMenu,
  },
  {
    title: "Invisible Card",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/invisiblecard/",
    imgUrl: invisibleCard,
  },
  {
    title: "Profile Card",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/sumoz-profilecard/",
    imgUrl: profileCard,
  },
  {
    title: "Grand Hotel",
    description: "Stack: HTML, CSS, JavaScript",
    isProjectLive: true,
    projectUrl: "https://ghewadesumit.github.io/flex-grand-hotel/",
    imgUrl: grandHotel,
  },
]

export const skills = [
  {
    skillName: "React",
    icon: <img alt="react" src={react} />,
    rating: 4.5,
    percentage: 70,
  },
  {
    skillName: "Angular",
    icon: <img alt="angular" src={angular} />,
    rating: 3,
    percentage: 70,
  },
  {
    skillName: "Typescript",
    icon: <img alt="typescript" src={typescript} />,
    rating: 3,
    percentage: 50,
  },
  {
    skillName: "JavaScript",
    icon: <img alt="javascript" src={javascript} />,
    rating: 4.5,
    percentage: 80,
  },
  {
    skillName: "Redux",
    icon: <img alt="redux" src={redux} />,
    rating: 3.5,
    percentage: 60,
  },
  {
    skillName: "CSS",
    icon: <img alt="css3" src={css3} />,
    rating: 4,
    percentage: 60,
  },
  {
    skillName: "Node",
    icon: <img alt="node" src={node} />,
    rating: 3,
    percentage: 50,
  },
  {
    skillName: "MySql",
    icon: <img alt="mysql" src={mysql} />,
    rating: 3,
    percentage: 50,
  },
  {
    skillName: "Git",
    icon: <img alt="git" src={git} />,
    rating: 3.5,
    percentage: 50,
  },
]

export const projectDescription =
  "These projects where built while I was learning new tech stack and making myself familiar with it. Some project links do actually work so check them out."
export const skillDescription =
  "Technology stack that I have learnt and used while sailing the path of programming. Feel free to ask me any doubt regarding the below mentioned stack and hopefully I would be able to answer them."
export const aboutme = `As a Front-End Developer, I bring extensive expertise from collaborations with healthcare, fintech, and product-based companies. Specializing in React, Angular, and Node, I excel in accelerating web development, prioritizing strategic problem-solving, and applying a deep understanding of data structures and algorithms. My dedication lies in crafting intuitive user interfaces tailored to diverse industry needs.`
