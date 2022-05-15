import styled from 'styled-components';

export const Main = styled.div`
    height:100vh;

`;
export const Content = styled.div`

    background-color: #E5E5E5;
 

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

.headerPage{
    color:#FFFFFF;
    background-color:#110338;
    height:13.25rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;

    .brand{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-right:7.5rem;

            &__icon{
             width:6.25rem;
             height:6.25rem;
             border: 1px solid #110338;
             border-radius: 100%;
            }

            &__title{
             width:1.875rem;
             height:2rem;
             font-family:"Poppins",sans-serif;
             font-weight:600;
             margin-left:0.625rem;
            }  
        }       
    }

.register{
    display:flex;
    flex-direction:column;
    align-items:right;
   
    width:12.25rem;

    &__btRegisterLeague{
        width:12.188rem;
        height:3rem;
        color:#FFFFFF;
        text-decoration:none;
        font-family:"Poppins",sans-serif;
        background-color: #1DA876;
        border: 1px solid #110338;
        border-radius: 5px;
        padding-top:14px;
        padding-left:42px;
        padding-right:22px;
    
        &:hover{
            background-color: #363F5F;
            transition: all ease 0.3s;
        }
    }

    &__btsRegisterComp{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding-top:0.625rem;
        width:16.25rem;  
       
    }

}

}
`;