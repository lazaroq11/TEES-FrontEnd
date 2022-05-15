import React from "react";
import {Main, FormContentTeam} from "../formTeam/styles"
function FormTeam(){
    return(
        <Main>
        <FormContentTeam>
    <main class="register">
        <div class="register__registerContainer">
            <div class="register__registerContainer__registerHeader">
        <h1 class="register__registerContainer__registerHeader__title">Cadastrar Equipes</h1>
        <a href={<formTeam/>} class="register__registerContainer__registerHeader__btTeam">Cadastrar Jogadores</a>
            </div>
        <form class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <input type = "text" class="register__registerContainer__form__input nameTeam" placeholder = "Nome" id="nameTeam"/>
             <input type = "text" class="register__registerContainer__form__input coach" placeholder = "Categoria" id="coach"/>
             <input type = "text" class="register__registerContainer__form__input yearFundation" placeholder = "Ano de Fundação" id="yearFundation"/>
         </div>
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Equipe</button>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    )
}

export default FormTeam;