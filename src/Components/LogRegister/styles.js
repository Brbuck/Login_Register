import styled, { keyframes } from 'styled-components';
import Button from '../Button'

const slide = keyframes`  
  from {
    transform: translateX(-500px); 
       
    }
  to {transform: translateX(0);}
  
`;

const Log = keyframes`  
    25% {
		opacity: 0;
	}
	
	75% {
		opacity: 1;
	}
  
`;

const opacity = keyframes`  
    0% {
		opacity: 0;
	}
	
	75% {
		opacity: 1;
	}
  
`;

export const Container = styled.div`
   /*  width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;

    @media screen and (max-width: 740px){
        flex-direction: column;
    } */
`;

export const Login = styled.div`
    width: 35%;
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #eccd52;

    position: absolute;
    left: ${({click})=> (click ? '65%' : '0')};
    z-index: 3;
    transition: 0.8s; 

    animation: ${({click})=> (click ? Log : null)};
    animation-duration: 1.3s;
    animation-timing-function: ease-in;

    @media screen and (max-width: 740px){
        width: 100%;
        height: 35vh;
        left: 0;
    }
`;

export const Register = styled.div`
    width: 65%;
    height:100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #ff0f53;

    position: absolute;
    right: ${({click})=> (click ? '35%' : '0')};
    z-index: 1;
    transition: 0.8s;

    animation: ${({click})=> (click ? slide : null)};
    animation-duration: 0.7s;
    animation-timing-function: ease-in;

    &.actives{
        animation: ${opacity};
        animation-duration: 0.7s;
        animation-timing-function: ease-in;
    }
    
    @media screen and (max-width: 740px){
        width: 100%;
        height: 65vh;
        left: 0;
        top: 35vh;
    }
    
`;

export const Content =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;

    &.active{
        animation: ${slide};
        animation-duration: 0.7s;
        animation-timing-function: ease-in;
    }
 

    h1{
        font-size: 3rem;
        text-transform: capitalize;
        margin-bottom: 30px;

        @media screen and (max-width: 930px){
            font-size: 2.3rem;
        }

        @media screen and (max-width: 420px){
            font-size: 2rem;
        }
        
    }

    span{
        font-size: 1.3rem;
        margin-bottom: 20px;

        @media screen and (max-width: 930px){
            font-size: 1.1rem;
        }

        @media screen and (max-width: 420px){
            font-size: 1rem;
        }
    }
`

export const ContentRegister = styled(Content)`
    width: 100%;
    color: #fff;

   
`;

export const Input = styled.input`
    width: 100%;
    max-width: 600px;
    height: 50px;
    padding: 8px;

    margin-bottom: 10px;
    border: none;
    background-color: #f8efbe;
    outline: none;

    font-size: 1.1rem;
    border-radius: 5px;
`;

export const SignInButton = styled(Button)`
    background-color: transparent;
    border: 2px solid #111;

    @media screen and (max-width: 420px){
        width: 160px;
        height: 40px;
    }
    
    &:hover{
        background-color: rgba(0,0,0,0.9);
        color: #ff8e1f;
        
    }

`

export const SignUpButton = styled(Button)`
    background-color: #ffe641;

    @media screen and (max-width: 420px){
        width: 160px;
        height: 40px;
    }

    &:hover{
        filter: opacity(0.8);
    }
`