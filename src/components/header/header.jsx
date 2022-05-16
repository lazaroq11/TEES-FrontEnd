import React from "react"
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom"
import FormLeague from "../formLeague/formLeague";
import {Main, Content} from './styles';
function Header(){


    return(
        <Main>
            <Content>
        <main>
            <header class="headerPage">
            <Link to="/">
                <div class="brand">
                <img  class="brand__icon" src = {logo} alt="CBV"/>
                <p class="brand__title">CBV Manager</p>
                </div>
            </Link>
                <div class="register">
                 <Link to="/" class="register__btRegisterLeague">Cadastrar Liga</Link>
                 <div class="register__btsRegisterComp">
                 <a href={<FormLeague/>} class="register__btsRegisterComp__btRegisterTeam">Cadastrar Time</a>
                 <a href={<formLeague/>} class="register__btsRegisterComp__btRegisterPlayer">Cadastrar Jogador</a>
                 </div>
                 
                </div>
            </header>
        </main>
            </Content>
        </Main>
    )
}

export default Header;