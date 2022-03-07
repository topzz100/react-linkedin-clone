import { Close, Image, VideoLibrary } from '@mui/icons-material'
import React, { useState } from 'react'
import { Form, Pic, Name, Pop, PopTitle, PopFooter, PopUpload, PopButton, PopTop, PostInfo, PostOption, Wrapper } from './PopUp.styles'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db } from '../../firebase'  

const PopUp = ({setShow}) => {
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
    setShow(false)
  }

  return (
    <>
      <Wrapper>
        <Pop>
          <PopTitle>
            <h4>Create Post</h4>
            <Close onClick = {() => setShow(false)}/>
          </PopTitle>
          <PopTop>
            <Pic src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
            <PostInfo>
              <Name>
                Temitope Adenekan
              </Name>
              <PostOption>
                <span>Anyone</span>
              </PostOption>
            </PostInfo>
          </PopTop>
          <Form>
            <textarea value = {inputValue} onChange ={(e) => {setInputValue(e.target.value)}} placeholder='What do you want to talk about?'></textarea>
            <PopFooter>
              <PopUpload>
                <span>
                  <Image style = {{color: 'red'}}/>
                </span>
                <span>
                  <VideoLibrary style = {{color: 'green'}}/>
                </span>
                
              </PopUpload>
              <PopButton type = 'submit' onClick={handlePost}>
                Send
              </PopButton>
            </PopFooter>
          </Form>
         
        </Pop>
      </Wrapper>
    </>
  )
}

export default PopUp