import { Close } from '@mui/icons-material'
import React from 'react'
import { Image, Pop, PopTitle, PopTop, Wrapper } from './PopUp.styles'

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
            <Image src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
          </PopTop>
        </Pop>
      </Wrapper>
    </>
  )
}

export default PopUp