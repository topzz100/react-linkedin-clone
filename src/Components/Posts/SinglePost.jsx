import { Comment, Send, Share, ThumbUp } from '@mui/icons-material'
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
        {photoUrl && <Image src={photoUrl}/>}
        
        <PostFooter>
          <SingleFooter>
            <ThumbUp style={{color: 'grey'}}/>
            <span>Like</span>
          </SingleFooter>
          <SingleFooter>
             <Comment style={{color: 'grey'}}/>
            <span>Comment</span>
          </SingleFooter>
          <SingleFooter>
            <Share style={{color: 'grey'}}/>
            <span>Share</span>
          </SingleFooter>
          <SingleFooter>
            <Send style={{color: 'grey'}}/>
            <span>Send</span>
          </SingleFooter>
        </PostFooter>
      </Post>
    </>
  )
}

export default SinglePost