import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  position: sticky;
  top: 0;
  background-color: white;
`;
export const Left = styled.div`
  display: flex;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
 
`;
export const SearchBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  background-color: #eef3f8;
  border-radius: 3px;
  padding: 0 10px;
  color: gray;
  input{
    width: 100%;
    border: none;
    outline: none;
    font-size: .9rem;
    height: 100%;
    background: transparent;
  }
`;
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: grey;
  width: 100px;
  img{
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  :hover{
    color: black;
  }
  
`;
export const TitleTag = styled.h5`
  font-size: .8rem;
  font-weight: 400;
`;
export const UserImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`

