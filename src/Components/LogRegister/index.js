import React, { useState } from 'react';

import { Container, Login, Register, Content, ContentRegister, Input } from './styles';

function LogRegister() {
  const [click, setClick] = useState(false)
  const togle = () => {
    setClick(!click)
  }
  return (
    <Container  >
      <Login click={click}>
        {
          click ? <Content>
            <h1>Hello, Friend!</h1>
            <span>Enter your personal details and start journey with us</span>
            <button onClick={togle}>Sign Up</button>
          </Content> : <Content>
            <h1>Welcome back</h1>
            <span>To keep connected with us please login with your personal info</span>
            <button onClick={togle}>Sign In</button>
          </Content>
        }
      </Login>
      <Register click={click}>
        {
          click ? <ContentRegister>
            <h1>Sign in</h1>
            <span>or use your account </span>
            <Input type="email" placeholder='E-mail' />
            <Input type="password" placeholder='Password' />
            <button >Sign In</button>
          </ContentRegister>
            : <ContentRegister>
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <Input type="text" placeholder='Name' />
              <Input type="email" placeholder='E-mail' />
              <Input type="password" placeholder='Password' />
              <button>Sign Up</button>
            </ContentRegister>
        }
      </Register>
    </Container>
  );
}

export default LogRegister;

