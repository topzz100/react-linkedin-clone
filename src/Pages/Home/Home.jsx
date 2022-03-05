import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import PopUp from '../../Components/PopUp/PopUp'
import { Wrapper } from './Home.styles'

const Home = () => {
  return (
    <>
    <Wrapper>
      <Header/>
      <Main/> 
      <PopUp/>
    </Wrapper>
      
    </>
  )
}

export default Home