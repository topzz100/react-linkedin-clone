import React from 'react'
import { StatsOption, StatsTitle, StatsValue } from './SideBar.styles'

const Stat = ({title, value}) => {
  return (
    <>
      <StatsOption>
        <StatsTitle>
          {title && title}
        </StatsTitle>
        <StatsValue>
          {value && value}
        </StatsValue>
      </StatsOption>
    </>
  )
}

export default Stat