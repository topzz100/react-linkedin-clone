import React from 'react'
import Feed from '../Feed/Feed'
import SideBar from '../SideBar/SideBar'
import { Wrapper } from './Main.styles'

const Main = () => {
  return (
    <>
      <Wrapper>
        <SideBar/>
        <Feed/>
      </Wrapper>
    </>
  )
}

export default Main