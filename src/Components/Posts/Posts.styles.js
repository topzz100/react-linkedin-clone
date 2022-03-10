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
`;
export const Desc = styled.p`
  font-size: 0.8rem;
`;
export const Message = styled.p`
  margin-top: 20px;
  font-size: 0.8rem;
`;
export const Image = styled.img`
  margin-top: 10px;
  width: 100%;
  object-fit: contain;
`;
export const UserPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SingleFooter = styled.div`
  display: flex;
  align-items: center;
`;
