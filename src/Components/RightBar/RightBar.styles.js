import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 0.3;
  margin-left: 20px;
  width: 100%;
  margin-top: 20px;
`;
export const Reco = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 15px;
`;
export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const RecoItems = styled.div`
  display: flex;
  margin-bottom: 15px;
  /* align-items: center; */
`;
export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
export const RecoContent = styled.div`
  margin-left: 10px;
`;
export const RecoTitle = styled.h4`
  font-weight: 600;
`;
export const RecoDesc = styled.p`
  display: flex;
  align-items: center;
  color: grey;
  margin-bottom: 5px;
  span{
    margin-right: 5px;
    font-size: 0.7rem;
    :nth-child(2){
        background-color: black;
        height: 3px;
        width: 3px;
        border-radius: 50%;
    }
   }
    
  
`;
export const RecoButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 18px;
  border: 1px solid gray;
  color: gray;
  font-size: 1rem;
  background: transparent;

`;
export const Forward = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  span{
    margin-right: 10px;
    font-size: .8rem;
    font-weight: 400;
  }
`

