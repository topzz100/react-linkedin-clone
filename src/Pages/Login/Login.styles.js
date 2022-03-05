import styled from 'styled-components'

export const Wrapper = styled.div`

`;
export const Nav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;
export const Logo = styled.img`
  width: 150px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const  JoinBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: gray;
  padding: 9px 15px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  :hover{
    background: lightgray;
  }
`;
export const  SignInBtn = styled.button`
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid blue;
  padding: 9px 25px;
  color: blue; 
  background: transparent;
  transition: 0.5s linear;
  margin-left: 10px;
  border-radius: 22px;
  :hover{
    background-color: lightblue;
    border: 2px solid blue;
  }
`;

