import React from 'react'
import { JoinBtn, Logo, Nav, Right, SignInBtn, Wrapper } from './Login.styles'

const Login = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <Logo src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png'/>
          <Right>
            <JoinBtn>
              Join now
            </JoinBtn>
            <SignInBtn>
              Sign In
            </SignInBtn>
          </Right>
        </Nav>

      </Wrapper>
    </>
  )
}

export default Login