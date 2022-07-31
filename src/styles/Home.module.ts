import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cccccc;
  
`

export const Main = styled.main`
width: 100%;
height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

export const Footer = styled.footer`
`

export const CardLogin = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left:  50%;
  width: 400px;
  height: 350px;
  transform: translate(-50%, -50%);
  background: #333;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  border: none;
  padding: 15px;
`;

export const CardUserImage = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 5%;
  left:  50%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  background: #333;
  box-sizing:border-box;
  background-color: #fff;
  border-radius: 150px;
  border: none;

`
