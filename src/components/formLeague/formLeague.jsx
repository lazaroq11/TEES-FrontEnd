import React from "react"
import {Main,FormContent} from "../formLeague/styles"
import {Link} from "react-router-dom"
import Header from "../header/header"

function FormLeague(){

    return(
           
           <Main>
           <Header/>   
               <FormContent>
           <main class="register">
               <div class="register__registerContainer">
                   <div class="register__registerContainer__registerHeader">
               <h1 class="register__registerContainer__registerHeader__title">Cadastrar Liga</h1>
               <Link to="/formTeam"  class="register__registerContainer__registerHeader__btTeam">Cadastrar Equipes</Link>
                   </div>
               <form class="register__registerContainer__form">
                <div class="register__registerContainer__form__inputs">
                    <input type = "text" class="register__registerContainer__form__input name" placeholder = "Nome" id="name"/>
                    <input type = "text" class="register__registerContainer__form__input category" placeholder = "Categoria" id="category"/>
                    <input type = "text" class="register__registerContainer__form__input qntdTeams" placeholder = "Quantidade de Equipes" id="qntdTeams"/>
                    <input type = "text" class="register__registerContainer__form__input begin" placeholder = "Data de Início" id="begin"/>
                    <input type = "text" class="register__registerContainer__form__input finish" placeholder = "Data da Final" id="finish"/>
                </div>
                <div class="register__registerContainer__form__bt">
                    <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Liga</button>
                </div>
               </form>
               </div>
           </main>
             </FormContent>
           </Main>
    )
}

export default FormLeague;