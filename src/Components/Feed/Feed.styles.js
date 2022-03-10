import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 20px;
  flex: 0.55;
  width: 100%;
`;
export const InputWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 15px;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const Form = styled.form`
width: 100%;
margin-left: 10px;
  button{
    display: none;
    margin-left: 10px;
  }
`;
export const InputBox = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 21px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  border: 1px solid gray;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  margin-left: 20px;
  font-size: 0.9rem;
`;
export const Option = styled.div`
  display: flex;
  align-items: center;
`;
export const OptionTitle = styled.h4`
  margin-left: 10px;
  font-size: 0.9rem;
  color: gray;
  font-weight: 400;
`;

