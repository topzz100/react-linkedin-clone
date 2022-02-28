import React from 'react'
import Posts from '../Posts/Posts'
import { Wrapper } from './Feed.styles'
import FeedInput from './FeedInput'

const Feed = () => {
  return (
    <>
      <Wrapper>
        <FeedInput/>
        <Posts/>
      </Wrapper>
    </>
  )
}

export default Feed