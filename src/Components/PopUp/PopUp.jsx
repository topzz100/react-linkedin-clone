import { Close, Image, VideoLibrary } from '@mui/icons-material'
import React, { useState } from 'react'
import { Form, FileImage, Pic, Name, Pop, PopTitle, PopFooter, PopUpload, PopButton, PopTop, PostInfo, PostOption, Wrapper } from './PopUp.styles'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db, storage } from '../../firebase'  
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const PopUp = ({setShow}) => {
  const [inputValue, setInputValue] = useState('')
  const [file, setFile] = useState(null)
  const [picUrl, setPicUrl] = useState('')
  const filename = Date.now() + file?.name

   const handlePost = async(e) => {
    e.preventDefault()
    if(inputValue){
      if(!file) return;
          const storageRef = ref(storage, `images/${filename}`)

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        getDownloadURL(ref(storage, 'images/'+filename))
        .then((url) => {
          setPicUrl(url)
        })
        .catch((error) => {
      
      })
     
      try {
            const docRef = await addDoc(collection(db, "posts"), {
              name: 'Tope Adenekan',
              deccription: 'Trying this out',
              message: inputValue,
              photoUrl : file && picUrl,
              timestamp: serverTimestamp()
              
          });
      
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }
    
    setInputValue('')
    setShow(false)
  }
  console.log(file)
  console.log(picUrl)

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

            {file && <FileImage src= {URL.createObjectURL(file)}/>}
            <PopFooter>
              <PopUpload>
                <span>
                  <input type="file" id = 'file' onChange={(e) => {setFile(e.target.files[0])}} style = {{display: 'none'}}/>
                  <label for='file'>
                    <Image style = {{color: 'red'}} />
                  </label>
                  
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