import { Close, Image, VideoLibrary } from '@mui/icons-material'
import React, { useState } from 'react'
import { Form, FileImage, Pic, Name, Pop, PopTitle, PopFooter, PopUpload, PopButton, PopTop, PostInfo, PostOption, Wrapper } from './PopUp.styles'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db, storage } from '../../firebase'  
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
 import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const PopUp = ({setShow}) => {
  const [inputValue, setInputValue] = useState('')
  const [file, setFile] = useState(null)
  const [picUrl, setPicUrl] = useState('')
  const user = useSelector(selectUser)

  const handlePost = (e) => {
    e.preventDefault()
    if(file){
      const filename = Date.now() + file?.name
      const storage = getStorage();
      const storageRef = ref(storage, 'images/'+filename);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
        
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            submitPost(downloadURL)

          
          })
          .catch(err => {
            console.log(err);
          });
        }
      );
      setInputValue('')
      setShow(false)
      return

    }
    submitPost('')
    setInputValue('')
    setShow(false)
 }
   
   const submitPost = async(pic) => {
     try {
             const docRef = await addDoc(collection(db, "posts"), {
               name: user.displayName,
               userImg: user?.photoUrl,
               description: '',
               message: inputValue,
               photoUrl : pic,
               timestamp: serverTimestamp()
              
           });
      
         } catch (e) {
             console.error("Error adding document: ", e);
           }
   }
  // console.log(file)
  // console.log(picUrl)
  

  return (
    <>
      <Wrapper>
        <Pop>
          <PopTitle>
            <h4>Create Post</h4>
            <Close onClick = {() => setShow(false)}/>
          </PopTitle>
          <PopTop>
            <Pic src = {user.photoUrl}/>
            <PostInfo>
              <Name>
                {user.name}
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