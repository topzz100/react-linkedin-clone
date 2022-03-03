import styled from "styled-components";

export const Wrapper = styled.div`
   flex: 0.2; 
   margin-top: 20px;
   margin-right: 20px;
  //  background-color: white;
   
   
   
`;
export const Top = styled.div`
    background-color: white;
    border-radius: 15px;
    padding-bottom: 20px;
`;
export const TopAbout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   border-bottom: 1px solid lightgray;
`;
export const TopStat = styled.div`

`;
export const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  margin-top: -40px;
`;
export const CoverImage = styled.img`
   width: 100%;
   height: 70px;
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
`;
export const ProfileImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;
export const TopName = styled.h4`
   margin-top: 20px;
   font-weight: 700;
   font-size: 1.15rem;
   color: gray;

`;
export const TopTitle = styled.p`
   margin-top: 5px;
   color: gray;
   font-size: .9rem;
   margin-bottom: 20px;
`;
export const StatsOption = styled.p`
  margin: 15px;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`;
export const StatsTitle = styled.span`
  color: gray;
`;
export const StatsValue = styled.span`
  color: blue;
`;