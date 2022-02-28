import React from 'react'
import { Wrapper } from './Posts.styles'
import SinglePost from './SinglePost'

const Posts = () => {
  return (
    <>
      <Wrapper>
        <SinglePost name='Temitope Adenekan' description = 'web developer' message = 'Can you code?'/>
      </Wrapper>
    </>
  )
}

export default Posts