import React, { useState } from 'react';

import { Container, Login, Register, Content } from './styles';

function LogRegister() {
  const [click, setClick] = useState(false)
  const togle = () => {
    setClick(!click)
  }
  return (
    <Container onClick={togle} >
      <Login click={click}>
       {
         click ?  <Content>
         <h1>Hello, Friend!</h1>
         <span>Enter your personal details and start journey with us</span>
         <button>mudar</button>
       </Content> :  <Content>
          <h1>Welcome back</h1>
          <span>To keep connected with us please login with your personal info</span>
          <button>mudar</button>
        </Content>
       }
      </Login>
      <Register click={click}>

      </Register>
    </Container>
  );
}

export default LogRegister;