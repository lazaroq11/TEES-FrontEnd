import styled from "styled-components";

export const Main = styled.div`
 
   
`;

export const FormContent = styled.div`
background-color: #E5E5E5;
width:100%;
height:100vh;

a {
    color:inherit;
    text-decoration:none;
}

* {
    padding:0;
    margin:0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
.register{
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    padding-top:100px;

    &__registerContainer{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        background-color:#FFFFFF;
        border-radius:5px;
        width:916px;
        height:442px;
        

       &__registerHeader{
           display:flex;
           align-items:center;
           flex-direction:row;
           font-family:"Poppins",sans-serif;
           color:#363F5F;
           padding-bottom: 28px;
           
           
           &__title{
            font-size:24px;
            
           }

           &__btTeam{
               font-size:16px;
               padding-left:467px;
           }
       }
       
       &__form{
           display:flex;
           justify-content:center;
           align-items:center;
           flex-direction:column;
           margin-top:10px;

           &__inputs{
               display:grid;
               grid-template:
                    "name begin";
                    "category finish";
                    "qntdTeams";
               column-gap:95px;
               row-gap:33px;
           }

           &__input{
               width:288px;
               height:53px;
               padding-top:34px;
               background-color:#E7E9EE;
               border: 1px solid #D7D7D7;
               border-radius:5px;
               font-family:"Poppins", sans-serif;
               font-weight:400;
               font-size:16px;
               padding-left:23px;
               padding-top:14px;
               padding-bottom:15px;

               &:focus {
                   outline: 0;
                   box-shadow: 0 0 0 0;
               }
           }

           &__bt{
               padding-top:34px;

               &__btRegister{
                 width:288px;
                 height:50px;
                 background-color:#1DA876;
                 border:1px solid #D7D7D7;
                 border-radius:5px;
                 color: #FFFFFF;
                 font-size:16px;
                 font-weight:600;
                 cursor:pointer;
                

                 &:hover{
                     background-color:#363F5F;
                     transition: all ease 0.3s;
                 }
               }
           }
       }
       
    }
    
}

`;