import React from 'react'
import Feed from '../Feed/Feed'
import RightBar from '../RightBar/RightBar'
import SideBar from '../SideBar/SideBar'
import { Wrapper } from './Main.styles'

const Main = () => {
  return (
    <>
      <Wrapper>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Wrapper>
    </>
  )
}

export default Main