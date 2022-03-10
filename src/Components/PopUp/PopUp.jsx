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
   
const filename = Date.now() + file?.name
const storage = getStorage();
const storageRef = ref(storage, 'images/'+filename);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    // switch (snapshot.state) {
    //   case 'paused':
    //     console.log('Upload is paused');
    //     break;
    //   case 'running':
    //     console.log('Upload is running');
    //     break;
    // }
  }, 
  (error) => {
    console.log(error)
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      // setPicUrl(downloadURL)
      submitPost(downloadURL)
//       db.collection("posts").add({
//               name: user.displayName,
//               userImg: user?.photoUrl,
//                deccription: '',
//                message: inputValue,
//                photoUrl : downloadURL,
//                timestamp: serverTimestamp()
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
     
    })
    .catch(err => {
      console.log(err);
    });
  }
);
setInputValue('')
     setShow(false)


  }

  //  const handlePost = async(e) => {
  //   e.preventDefault()
  //   const filename = file.name
  //   if(inputValue){
  //     if(file) {
  //         const storageRef = ref(storage, `images/${filename}`)

  //       // 'file' comes from the Blob or File API
  //       uploadBytes(storageRef, file).then((snapshot) => {
  //         console.log('Uploaded a blob or file!');
  //       });
  //       getDownloadURL(ref(storage, `images/${filename}`))
  //       .then((url) => {
  //         setPicUrl(url)
  //         console.log('image downloaded')
  //         submitPost()
  //       })
  //       .catch((error) => {
      
  //     })
  //   }
      
      
  //   }
    
  //   setInputValue('')
  //   setShow(false)
  // }
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