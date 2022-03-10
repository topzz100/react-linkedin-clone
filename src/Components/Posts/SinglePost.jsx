import { Avatar } from '@mui/material'
import React from 'react'
import { Desc, Image, Message, Name, Post, PostFooter, SingleFooter, Top, TopRight, UserPic } from './Posts.styles'

const SinglePost = ({name, message, photoUrl, userImg}) => {
  return (
    <>
      <Post>
        <Top>
          {
            userImg ? <UserPic src= {userImg}/> : <Avatar style={{width: '55px', height: '55px'}}/>
          }
          
          <TopRight>
            <Name>
              {name}
            </Name>
            <Desc>
              
            </Desc>
          </TopRight>

        </Top>
        <Message>
          {message}
        </Message>
        <Image src={photoUrl}/>
        <PostFooter>
          <SingleFooter>
            <Avatar/>
            <span>Like</span>
          </SingleFooter>
          <SingleFooter>
            
            <span>Comment</span>
          </SingleFooter>
          <SingleFooter>
            
            <span>Share</span>
          </SingleFooter>
          <SingleFooter>
           
            <span>Send</span>
          </SingleFooter>
        </PostFooter>
      </Post>
    </>
  )
}

export default SinglePost