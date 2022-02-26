import React from "react";
import NavBar from "../components/NavBar"


export default function Projects(){
    return(
        <div className="App">
        {<NavBar/>}
        <section>
                <div className="container projects">
                    <h1>My Projects</h1>
                </div>
            </section>
    </div>
    );
}