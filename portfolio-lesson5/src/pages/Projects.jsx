import React from "react";
import NavBar from "../components/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {GoMarkGithub} from "react-icons/go";
//import {AiFillFolder} from "react-icons/ai"


export default function Projects() {
    return (
        <div className="App proj">
            {<NavBar />}
                <h1>Projects I've worked on</h1>
            <section className="projects img">
                <div className="row right">
                    <div className="col col-md-6">

                    </div>
                    <div className="col col-md-6">
                        <a href="https://github.com/Nkwakx/System-ICT-Helpdesk" className="services-wrap">
                            <div className="icon">
                                <span><IoIosArrowForward /></span>
                                <span><IoIosArrowBack /></span>
                            </div>
                            {/* <div className="git"><AiFillFolder/></div> */}
                            <div className="git"><GoMarkGithub/></div>
                            <h2>Help-desk desktop service</h2>
                            <p>NMU help desk serveices for students who require help in anyhow.</p>
                        </a>
                        <a href="https://github.com/Nkwakx/OCMS03_TheCollective" className="services-wrap">
                            <div className="icon">
                                <span><IoIosArrowForward /></span>
                                <span><IoIosArrowBack /></span>
                            </div>
                            {/* <div className="git"><AiFillFolder/></div> */}
                            <div className="git"><GoMarkGithub/></div>
                            <h2>Outpatient Management</h2>
                            <p>Web based system that meant to help outpation life easy when they wanna consult.</p>
                        </a>
                        <a href="https://github.com/Nkwakx/Covid19_Testing_MS" className="services-wrap">
                            <div className="icon">
                                <span><IoIosArrowForward /></span>
                                <span><IoIosArrowBack /></span>
                            </div>
                            {/* <div className="git"><AiFillFolder/></div> */}
                            <div className="git"><GoMarkGithub/></div>
                            <h2>Covid 19 Testing</h2>
                            <p>System meant to help nurse pick the test request and schedule it and more.</p>
                        </a>
                        <a href="#" className="services-wrap">
                            <div className="icon">
                                <span><IoIosArrowForward /></span>
                                <span><IoIosArrowBack /></span>
                            </div>
                            {/* <div className="git"><AiFillFolder/></div>
                            <div className="git"><GoMarkGithub/></div> */}
                            <h2>Upcoming</h2>
                            <p>They Still Coming soon, just wait for it.</p>
                        </a>
                        <a href="#" className="services-wrap">
                            <div className="icon">
                                <span><IoIosArrowForward /></span>
                                <span><IoIosArrowBack /></span>
                            </div>
                            {/* <div className="git"><AiFillFolder/></div>
                            <div className="git"><GoMarkGithub/></div> */}
                            <h2>End Of Internship</h2>
                            <p>End of assessments I guess there will be one or two.</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}