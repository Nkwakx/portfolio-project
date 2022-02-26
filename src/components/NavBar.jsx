import React from "react";
import { NavLink } from "react-router-dom";
import userprofile from "./images/userprofile.png"
import { ImHome } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { BiMessage } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";


export default function NavBar() {
    return (
        <div className="App">
            <header className="App-nav">
                <div className="App-logo container"><h1><NavLink to="/">NK</NavLink></h1></div>

                <nav className='App-header'>
                    <div className="nav-list">
                        <NavLink className={'nav-link'} to='/home'><i className="nav-icon"><ImHome /></i>Home</NavLink>
                        <NavLink className={'nav-link'} to='/about'><i className="nav-icon"><BiUser /></i>About</NavLink>
                        <NavLink className={'nav-link'} to='/skills'><i className="nav-icon"><GiSkills /></i>Skills</NavLink>
                        <NavLink className={'nav-link'} to='/contact'><i className="nav-icon"><BiMessage /></i>Contact</NavLink>
                        <NavLink className={'nav-link'} to='/projects'><i className="nav-icon"><AiOutlineFundProjectionScreen /></i>Projects</NavLink>
                    </div>
                </nav>

                <div className="profile-name">Nlakaniplo Khumalo</div>
                <img src={userprofile} alt="user-name" className="nav-img" />
            </header>
        </div>
    );
}