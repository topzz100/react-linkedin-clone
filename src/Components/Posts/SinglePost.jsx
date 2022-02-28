import { Avatar } from '@mui/material'
import React from 'react'
import { Desc, Message, Name, Post, Top, TopRight } from './Posts.styles'

const SinglePost = ({name, description, message}) => {
  return (
    <>
      <Post>
        <Top>
          <Avatar style={{width: '55px', height: '55px'}}/>
          <TopRight>
            <Name>
              {name}
            </Name>
            <Desc>
              {description}
            </Desc>
          </TopRight>

        </Top>
        <Message>
          {message}
        </Message>

      </Post>
    </>
  )
}

export default SinglePost