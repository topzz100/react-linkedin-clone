import { Article, Event, InsertPhoto, OndemandVideo } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { Bottom, Form, Input, InputBox, InputWrapper, Top } from './Feed.styles'
import InputOption from './InputOption'

const FeedInput = () => {
  return (
    <>
      <InputWrapper>
        <Top>
          <Avatar style={{height: '55px', width: '55px'}}/>
            <Form>
              <InputBox>
                <Input type='text' placeholder='Start a post'/>
              </InputBox>
              <button type='submit'></button>
            </Form>
        </Top>
        <Bottom>
          <InputOption title = 'Photo' Icon={InsertPhoto} color = 'red'/>
          <InputOption title = 'Video' Icon={OndemandVideo} color = 'green'/>
          <InputOption title = 'Event' Icon={Event} color = 'blue'/>
          <InputOption title = 'Write Article' Icon={Article} color = 'orange'/>
        </Bottom>
      </InputWrapper>
    </>
  )
}

export default FeedInput