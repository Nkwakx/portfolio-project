import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllRoutesList } from "./AllRoutesListed";

// npm install --save react-router-dom

class Routing extends Component{
    render(){
        return(
            <Router>
                <Routes>
                    {AllRoutesList.map((entry, index)=> {

                        return <Route key={index} exact path={entry.path} element={entry.comp}/>

                    })}


                    

                    {/* {AllRoutesList.map((entry)=> {

                    return <Route exact path={entry.path} element={<Home/>}/>

                    })} */}
                    {/* <Route exact path='/' element={<Home/>}></Route>
                    <Route exact path='/about' element={<About/>}></Route>
                    <Route exact path='/contact' element={<Contact/>}></Route>
                    <Route exact path='/project' element={<Projects/>}></Route>
                    <Route exact path='/skills' element={<Skills/>}></Route> */}
                </Routes>
            </Router>
        );
    }
}

export default Routing;