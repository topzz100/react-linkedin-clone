import { ArrowForward, ChevronRight } from '@mui/icons-material'
import React from 'react'
import { Btn, Hero, JoinBtn, LeftSec, Logo, Nav, Right, RightSec, Section, SignInBtn, Title, Wrapper } from './Login.styles'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../../features/user/userSlice';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleLogin = () => {
    if(!user){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
        
        console.log(user)
    }).catch((error) => {
        console.log(error);

      });
    }

  }
  return (
    <>
      <Wrapper>
        <Nav>
          <Logo src='/images/login-logo.svg'/>
          <Right>
            <JoinBtn>
              Join now
            </JoinBtn>
            <SignInBtn onClick={handleLogin}>
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