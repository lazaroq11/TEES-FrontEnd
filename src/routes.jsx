import React from 'react'
import {Route,BrowserRouter,Routes as Router} from 'react-router-dom';


//import Header from './components/header/header'
import FormLeague from './components/formLeague/formLeague'
import FormTeam from './components/formTeam/formTeam'
import Login from "./components/login/login"

 function Routes(){
    return(
        <BrowserRouter>
        <Router>
        <Route element={<Login/>} path="/"/>
        <Route element={<FormLeague/>} path="/formLeague"/>
        <Route element={<FormTeam/>} path="/formTeam"/>
        </Router>
        </BrowserRouter>
        
    )
}

export default Routes;