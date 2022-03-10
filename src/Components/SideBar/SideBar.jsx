import React from 'react'
import { CoverImage, ImgBox, ProfileImage, Top, TopAbout, TopName, TopStat, TopTitle, Wrapper } from './SideBar.styles'
import Stat from './Stat'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const SideBar = () => {
  const user = useSelector(selectUser)
  return (
    <>
      <Wrapper>
        <Top>
          <TopAbout>
            <CoverImage src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>
            <ImgBox>
            
              <ProfileImage src = {user.photoUrl}/>
            </ImgBox>
            <TopName>
              {user.displayName}
            </TopName>
            <TopTitle>
              Web Developer
            </TopTitle>
          
          </TopAbout>
          <TopStat>
            <Stat title = 'Who viewed your profile' value = '220'/>
            <Stat title = 'views of your posts' value= ' 450'/>

          </TopStat>
        </Top>
      </Wrapper>

    </>
  )
}

export default SideBar