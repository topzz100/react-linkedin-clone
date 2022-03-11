import styled from 'styled-components'

export const Wrapper = styled.div`
 background-color: rgba(0, 0, 0, 0.7);
 height: 100vh;
 width: 100%;
 position: absolute;
 top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Pop = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 500px;
  min-height: 300px;
  border-radius: 15px;
  background-color: white;
  @media(max-width: 768px){
    width: 90%;
    /* margin: 10px; */
  }
`;
export const PopTitle = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4{
    font-size: 1.1rem;
    font-weight: 300;
  }
  @media(max-width: 768px){
    padding: 10px;
    h4{
      font-size: 1rem;
    }
  }
`;
export const PopTop = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  @media(max-width: 768px){
    padding: 10px;
  }
`;
export const Pic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const PostInfo = styled.div`
  margin-left: 5px;
`;
export const Name = styled.h4`
  margin-bottom: 2px;
`;
export const Form = styled.form`
  
  padding: 15px;
 
  textarea{
    width: 100%;
    margin-bottom: 30px;
    resize: none;
    min-height:50px;
    border: none;
    padding: 5px;
    font-size: 0.9rem;

  }
`;
export const PostOption = styled.div`
  padding: 7px 15px;
  border: 1px solid gray;
  color: gray;
  border-radius: 15px;
`;
export const PopFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
export const PopUpload = styled.div`
  span{
    margin-right: 10px
  }
`;
export const PopButton = styled.button`
  font-size: 0.9rem;
  background-color: whitesmoke;
  color: gray;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 7px 12px;
  :hover{
    background-color: lightgrey;
  }
`;
export const FileImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;


