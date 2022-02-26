import React from "react";
import NavBar from "../components/NavBar";
import userprofile from "../components/images/userprofile.png";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export default function About() {
    return (
        <div className="App">
            {<NavBar />}
            <section className="group">
                <div className="sidebar">
                    <div className="bio">
                        <img src={userprofile} alt="" className="userprofile-img" />
                        <h3>Nlakaniplo Siboniso Khumalo</h3>
                        <div className="qua-description"><p>(2022 Advanced Diploma in Information Technology - Software Development Graduate)</p></div>
                    </div>
                    <hr />
                    <p>Social & More </p>
                    <ul className="nav-social">
                        <li><a href="https://www.linkedin.com/in/nlakaniplo-siboniso-khumalo-97344b198/" target="_blank"><BsLinkedin /></a></li>
                        <li><a href="https://github.com/Nkwakx" target="_blank"><BsGithub /></a></li>
                        <li><a href="" target="_blank"><BsTwitter /></a></li>
                        <li><a href="" target="_blank"><BsFacebook /></a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="pop-words">
                        <h1>I'm a ...</h1>
                        <div className="slide-bar" id="div1">Software Engineer</div>
                        <div className="slide-bar" id="div2">Full-Stack Developer</div>
                        <div className="slide-bar" id="div3">Database Developer</div>
                        <div className="">

                            <h5 className="sentence">Back - End
                                <div className="popEffect">
                                    <span>C#, </span>
                                    <span>ASP.NET Core MVC, </span>
                                    <span>PHP (Laravel _ framework), </span>
                                    <span>Node JS. </span>
                                </div>
                            </h5>
                        </div>
                    </div>
                    <div className="about">
                        <h1>Little more about me.</h1>
                        <p>With the litle experience I have working on both backend and frontend. I build web application from scratch using languages below.</p>

                        <br />
                        <div><button className="btn-contact">Contact Me!</button></div>
                        <br />

                        <h5 className="sentence">Front - End
                            <div className="popEffect">
                                <span>HTML, </span>
                                <span>CSS, </span>
                                <span>Javascript (ES6+), </span>
                                <span>React. </span>
                            </div>
                        </h5>

                    </div>
                </div>
            </section>

        </div>
    );
}