import React from 'react'
import {Route,BrowserRouter,Routes as Router} from 'react-router-dom';


//import Header from './components/header/header'
import FormLeague from './components/formLeague/formLeague'
import FormTeam from './components/formTeam/formTeam'

 function Routes(){
    return(
        <BrowserRouter>
        <Router>
        <Route element={<FormLeague/>} path="/"/>
        <Route element={<FormTeam/>} path="/formTeam"/>
        </Router>
        </BrowserRouter>
        
    )
}

export default Routes;