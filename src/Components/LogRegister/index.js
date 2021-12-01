import React, { useState } from 'react';

import { Container, Login, Register, Content, ContentRegister, Input, SignInButton, SignUpButton } from './styles';

function LogRegister() {
  const [click, setClick] = useState(false)
  const togle = () => {
    setClick(!click)
  }
  return (
    <Container  >
      <Login click={click}>
        {
          click ? <Content click={click} >
            <h1>Hello, Friend!</h1>
            <span>Enter your personal details and start journey with us</span>
            <SignInButton onClick={togle}>Sign Up</SignInButton>
          </Content> : <Content className={click ? null : 'active'}>
            <h1>Welcome back</h1>
            <span>To keep connected with us please login with your personal info</span>
            <SignInButton onClick={togle}>Sign In</SignInButton>
          </Content>
        }
      </Login>
      <Register className={click ? null : 'actives'} click={click}>
        {
          click ? <ContentRegister   >
            <h1>Sign in</h1>
            <span>or use your account </span>
            <Input type="email" placeholder='E-mail' />
            <Input type="password" placeholder='Password' />
            <SignUpButton >Sign In</SignUpButton>
          </ContentRegister>
            : <ContentRegister >
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <Input type="text" placeholder='Name' />
              <Input type="email" placeholder='E-mail' />
              <Input type="password" placeholder='Password' />
              <SignUpButton>Sign Up</SignUpButton>
            </ContentRegister>
        }
      </Register>
    </Container>
  );
}

export default LogRegister;

