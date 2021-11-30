import styled from 'styled-components';

export const Container = styled.div`
   /*  width: 100vw;
    height: 100vh; */

    display: flex;
  
`;

export const Login = styled.div`
    width: 35%;
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;

    position: absolute;
    left: ${({click})=> (click ? '65%' : '0')};
    z-index: 1;
    transition: 0.3s;
`;

export const Register = styled.div`
    width: 65%;
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: yellow;

    position: absolute;
    right: ${({click})=> (click ? '35%' : '0')};
    z-index: 2;
    transition: 0.3s;
`;

export const Content =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`