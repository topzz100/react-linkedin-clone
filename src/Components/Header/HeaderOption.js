import React from 'react'
import { Option, TitleTag, UserImg } from './Header.styles'

const HeaderOption = ({Icon, Title, Avatar, photo}) => {
  return (
    <>
      <Option>
        {
          Icon && <Icon style = {{fontSize: '27px'}}/>
        }
        {
          Avatar && <Avatar style = {{fontSize: '27px'}}/>
        }
          {
          photo && <UserImg src={photo}/>
        }
        <TitleTag>
          {Title}
        </TitleTag>
      </Option>
    </>
  )
}

export default HeaderOption