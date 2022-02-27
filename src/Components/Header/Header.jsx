import { Search } from '@mui/icons-material'
import React from 'react'
import { Image, Input, Left, Right, SearchBox, Wrapper } from '../Header.styles'

const Header = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <Image src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'/>
          <SearchBox>
            <Search/>
            <input type="text" />
          </SearchBox>
          
        </Left>
        <Right>

        </Right>
      </Wrapper>
    </>
  )
}

export default Header