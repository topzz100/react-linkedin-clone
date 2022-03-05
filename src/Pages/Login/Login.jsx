import { ArrowForward, ChevronRight } from '@mui/icons-material'
import React from 'react'
import { Btn, Hero, JoinBtn, LeftSec, Logo, Nav, Right, RightSec, Section, SignInBtn, Title, Wrapper } from './Login.styles'

const Login = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <Logo src='/images/login-logo.svg'/>
          <Right>
            <JoinBtn>
              Join now
            </JoinBtn>
            <SignInBtn>
              Sign In
            </SignInBtn>
          </Right>
        </Nav>
        <Section>
          <LeftSec>
            <Title>
              Welcome to your professional community
            </Title>
            <Btn>
              <span>Search for a job</span>
              <ArrowForward/>
            </Btn>
            <Btn>
              <span>Find a person you know</span>
              <ArrowForward/>
            </Btn>
            <Btn>
              <span>Learn anew skill</span>
              <ArrowForward/>
            </Btn>
          </LeftSec>
          <RightSec>
            <Hero src='/images/login-hero.svg'/>
          </RightSec>
        </Section>

      </Wrapper>
    </>
  )
}

export default Login