import React from 'react'
import Posts from '../Posts/Posts'
import { Wrapper } from './Feed.styles'
import FeedInput from './FeedInput'

const Feed = ({setShow}) => {
  return (
    <>
      <Wrapper>
        <FeedInput setShow = {setShow}/>
        <Posts/>
      </Wrapper>
    </>
  )
}

export default Feed