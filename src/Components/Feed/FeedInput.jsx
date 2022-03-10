import { Article, Event, InsertPhoto, OndemandVideo } from '@mui/icons-material'
import { Avatar } from '@mui/material'
// import firebase from 'firebase'
import React, { useState } from 'react'
import { Bottom, Form, Image, Input, InputBox, InputWrapper, Top } from './Feed.styles'

import InputOption from './InputOption'

import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'


const FeedInput = ({setShow}) => {
  const [inputValue, setInputValue] = useState('')
  const user = useSelector(selectUser)
  // const handlePost = async(e) => {
  //   e.preventDefault()
  //   if(inputValue){
  //     try {
  //           const docRef = await addDoc(collection(db, "posts"), {
  //             name: 'Tope Adenekan',
  //             deccription: 'Trying this out',
  //             message: inputValue,
  //             photoUrl : '',
  //             timestamp: serverTimestamp()
              
  //         });
      
  //         } catch (e) {
  //           console.error("Error adding document: ", e);
  //         }

  //   }
    
  //   setInputValue('')
  //}

  return (
    <>
      <InputWrapper>
        <Top>
          {
            user? <Image src = {user.photoUrl}/>: <Avatar style={{height: '55px', width: '55px'}}/>
          }
         
            <Form >
              <InputBox>
                <Input type='text' value={inputValue} onChange = {(e)=>(setInputValue(e.target.value))} placeholder='Start a post' onClick = {() => setShow(true)}/>
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