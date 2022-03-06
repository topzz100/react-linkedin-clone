import React from 'react'
import Feed from '../Feed/Feed'
import RightBar from '../RightBar/RightBar'
import SideBar from '../SideBar/SideBar'
import { Wrapper } from './Main.styles'

const Main = ({setShow}) => {
  return (
    <>
      <Wrapper>
        <SideBar/>
        <Feed setShow = {setShow}/>
        <RightBar/>
      </Wrapper>
    </>
  )
}

export default Main