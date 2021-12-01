import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
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
    z-index: 1;
    transition: 0.3s; 
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
    z-index: 2;
    transition: 0.3s;
`;

export const Content =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;

    h1{
        font-size: 3rem;
        text-transform: capitalize;
        margin-bottom: 30px;
    }

    span{
        font-size: 1.3rem;
        margin-bottom: 20px;
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