import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 20px;
  
`;
export const Post = styled.div`
  padding: 15px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: white;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const TopRight = styled.div`
  margin-left: 15px;
`;
export const Name = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
`;
export const Desc = styled.p`
  font-size: 0.8rem;
`;
export const Message = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  
  width: 100%;
  object-fit: contain;
  margin-bottom: 10px;
`;
export const UserPic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-top: 1px solid lightgray;
  padding-top: 15px;
`;
export const SingleFooter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span{
    margin-left: 5px;
  }
  @media(max-width: 768px){
    .MuiSvgIcon-root{
    font-size: 18px;
  }
    span{
      font-size: 0.8rem;
    }
  }
`;
