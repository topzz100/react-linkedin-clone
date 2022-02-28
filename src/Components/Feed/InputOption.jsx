import React from 'react'
import { Option, OptionTitle } from './Feed.styles'

const InputOption = ({title, Icon, color}) => {
  return (
    <>
      <Option>
        {Icon && <Icon style = {{color : color}}/>}
        
        <OptionTitle>
          {title && title}
        </OptionTitle>
      </Option>
    </>
  )
}

export default InputOption