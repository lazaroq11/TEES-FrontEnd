import React from 'react'
import {Route,BrowserRouter,Routes as Router} from 'react-router-dom';


import Header from './components/header/header'
import FormLeague from './components/formLeague/formLeague'

 function Routes(){
    return(
        <BrowserRouter>
        <Router>
        <Route element={<Header/>} path=""/>
        <Route element={<FormLeague/>} path="/FormLeague"/>
        </Router>
        </BrowserRouter>
        
    )
}

export default Routes;