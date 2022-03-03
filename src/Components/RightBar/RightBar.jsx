import { Add, ArrowForward, Info } from '@mui/icons-material'
import React from 'react'
import { Forward, Image, Reco, RecoButton, RecoContent, RecoDesc, RecoItems, RecoTitle, Title, Wrapper } from './RightBar.styles'

const Recommend = () => {
  return <>
    <RecoItems>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'/>
      <RecoContent>
        <RecoTitle>
          JavaScript Developer
        </RecoTitle>
        <RecoDesc>
          <span>Company</span><span></span><span>Program Development</span>
        </RecoDesc>
        <RecoButton>
          <Add/>
          Follow
        </RecoButton>
      </RecoContent>

    </RecoItems>
  </>
}

const RightBar = () => {
  return (
    <>
      <Wrapper>
        <Reco>
          <Title>
            <span>
              Add to your feed
            </span>
            <span>
              <Info/>
            </span>
          </Title>
          <Recommend/>
          <Recommend/>
          <Recommend/>

          <Forward>
            <span>View all recommendations</span>
            <ArrowForward/>
          </Forward>

        </Reco>
      </Wrapper>
    </>
  )
}

export default RightBar