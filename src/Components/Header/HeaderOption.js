import { ArrowDropDown } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Option, SignOut, TitleTag, UserImg } from './Header.styles'
import { getAuth, signOut } from "firebase/auth";
import {logout} from '../../features/user/userSlice';

const HeaderOption = ({Icon, Title, Avatar, photo}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleLogOut = () => {
    const auth = getAuth();
        signOut(auth).then(() => {
          console.log('logout')
          dispatch(logout())
          window.location.replace('/login');
        }).catch((error) => {
          console.log(error)
      });
  }
  return (
    <>
      <Option>
        {
          Icon && <Icon style = {{fontSize: '20px'}}/>
        }
        {
          Avatar && <Avatar style = {{fontSize: '20px'}}/>
        }
          {
          photo && <UserImg src={photo}/>
        }
        <TitleTag>
          {photo ? <>
            {Title} <span onClick={() => setShow(!show)}> <ArrowDropDown/></span> 
             <SignOut show = {show} onClick={() => handleLogOut()}>
               Sign out
             </SignOut>
          </> : Title}
        </TitleTag>
      </Option>
    </>
  )
}

export default HeaderOption