import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Lesson5 from "../pages/classAssignments/Lesson5";

export const AllRoutesList = [
    { name: "Home", path: "/", comp: <Home /> },
    { name: "About", path: "about", comp: <About /> },
    { name: "Contact", path: "contact", comp: <Contact /> },
    { name: "Projects", path: "projects", comp: <Projects /> },
    { name: "Skills", path: "skills", comp: <Skills /> },
    { name: "Lesson5", path: "lessons", comp: <Lesson5 /> },
]

// export const AllRoutebsObj = {
//     home: { path: "/" },
//     about: { path: "/about" },
//     contact: { path: "/contact" },
//     project: { path: "/project" },
//     skill: { path: "/skill" }
// }