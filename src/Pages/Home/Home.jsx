import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import PopUp from '../../Components/PopUp/PopUp'
import { Wrapper } from './Home.styles'

const Home = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <Wrapper>
      <Header/>
      <Main setShow = {setShow}/> 
      {
        show && <PopUp setShow = {setShow}/>
      }
      
    </Wrapper>
      
    </>
  )
}

export default Home