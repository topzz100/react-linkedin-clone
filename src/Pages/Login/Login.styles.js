import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
`;
export const Nav = styled.div`
  height: 10vh;
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
  font-size: 0.9rem;
  font-weight: 500;
  color: gray;
  padding: 7px 12px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  :hover{
    background: lightgray;
  }
`;
export const  SignInBtn = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid blue;
  padding: 7px 20px;
  color: blue; 
  background: transparent;
  transition: 0.5s linear;
  margin-left: 10px;
  border-radius: 20px;
  
  :hover{
    background-color: lightblue;
    border: 1.5px solid blue;
  }
`;
export const Section = styled.div`
  height: 90vh;
  display: flex;
  overflow: hidden;
`;
export const LeftSec = styled.div`
  flex: 0.5;
  padding: 10px;
  padding-left: 100px;
`;
export const RightSec = styled.div`
  flex: 0.5;
   height: 100%;
  width: 100%; 
  position: relative;
`;
export const Hero = styled.img`
  width: 110%;
  top: 60px;
  object-fit: cover;
  position: absolute;
  
  right: -110px;
`;
export const Title = styled.p`
  margin-top: 20px;
  color: #bfaa6f;
  font-size: 3.7rem;
  font-weight: 200;
  width: 100%;
  margin-bottom: 50px;
`;

export const Btn = styled.button`
  width: 450px;
  height: 60px;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 20px;
  :hover{
    box-shadow: 1px 0px 12px -1px rgba(129,129,129,1);
    -webkit-box-shadow: 1px 0px 12px -1px rgba(129,129,129,1);
    -moz-box-shadow: 1px 0px 12px -1px rgba(129,129,129,1);
  }
`;

