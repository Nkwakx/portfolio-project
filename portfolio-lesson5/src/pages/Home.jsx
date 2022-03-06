import React from "react";
import NavBar from "../components/NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Home() {
    return (

        <div className="App">
            {<NavBar/>}
            {<About/>}
            {<Skills/>}
            {<Projects/>}
            {<Contact/>}
        </div>
    );
}