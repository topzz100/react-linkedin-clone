import React from 'react'
import { Option, TitleTag } from './Header.styles'

const HeaderOption = ({Icon, Title, Avatar}) => {
  return (
    <>
      <Option>
        {
          Icon && <Icon style = {{fontSize: '27px'}}/>
        }
        {
          Avatar && <Avatar style = {{fontSize: '27px'}}/>
        }
        <TitleTag>
          {Title}
        </TitleTag>
      </Option>
    </>
  )
}

export default HeaderOption