import { Article, Event, InsertPhoto, OndemandVideo } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
// import firebase from 'firebase'
import React, { useState } from 'react'
import { Bottom, Form, Input, InputBox, InputWrapper, Top } from './Feed.styles'

import InputOption from './InputOption'

import { db } from '../../firebase'


const FeedInput = (e) => {
  const [inputValue, setInputValue] = useState('')

  const handlePost = async(e) => {
    e.preventDefault()
    if(inputValue){
      try {
            const docRef = await addDoc(collection(db, "posts"), {
              name: 'Tope Adenekan',
              deccription: 'Trying this out',
              message: inputValue,
              photoUrl : '',
              timestamp: serverTimestamp()
              
          });
      
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }
    
    setInputValue('')
  }

  return (
    <>
      <InputWrapper>
        <Top>
          <Avatar style={{height: '55px', width: '55px'}}/>
            <Form >
              <InputBox>
                <Input type='text' value={inputValue} onChange = {(e)=>(setInputValue(e.target.value))} placeholder='Start a post'/>
              </InputBox>
              <button type='submit' onClick={handlePost}></button>
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