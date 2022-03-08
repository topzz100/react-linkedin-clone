import { AccountCircle, Home, Message, Notifications, People, Search, Work } from '@mui/icons-material'
import React from 'react'
import { Image, Left, Right, SearchBox, UserImg, Wrapper } from './Header.styles'
import HeaderOption from './HeaderOption'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <>
      <Wrapper>
        <Left>
          
          <Image src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'/>
          <SearchBox>
            <Search/>
            <input type="text" placeholder='Search jobs, companies'/>
          </SearchBox>
          
        </Left>
        <Right>
          <HeaderOption Icon = {Home} Title = 'Home'/>
          <HeaderOption Icon= {People} Title = 'My Network'/>
          <HeaderOption Icon = {Work} Title = 'Jobs'/>
          <HeaderOption Icon = {Message} Title = 'Messagings'/>
          <HeaderOption Icon = {Notifications} Title = 'Notifications'/>
          {
            user? <HeaderOption photo = {user.photoUrl} Title = 'Me'/> : <HeaderOption Avatar ={AccountCircle} Title = 'Me'/>
          }
          
        </Right>
      </Wrapper>
    </>
  )
}

export default Header