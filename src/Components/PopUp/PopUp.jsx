import { Close, Image, VideoLibrary } from '@mui/icons-material'
import React from 'react'
import { Form, Pic, Name, Pop, PopTitle, PopFooter, PopUpload, PopButton, PopTop, PostInfo, PostOption, Wrapper } from './PopUp.styles'

const PopUp = () => {
  return (
    <>
      <Wrapper>
        <Pop>
          <PopTitle>
            <h4>Create Post</h4>
            <Close/>
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
            <textarea autoFocus placeholder='What do you want to talk about?'></textarea>
            <PopFooter>
              <PopUpload>
                <span>
                  <Image/>
                </span>
                <span>
                  <VideoLibrary/>
                </span>
                
              </PopUpload>
              <PopButton>
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