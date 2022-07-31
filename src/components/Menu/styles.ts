import styled from "styled-components";

import { ImMenu } from "react-icons/im";

export const Container = styled.div`
  position: relative;
  background-color: aqua;
  width: 0%;
  height: 100vh;

`;

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid black;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 350px;
  height: 100vh;
  top: 0;
  left: -350px;
  z-index: 10;
  flex-direction: column;

  
`;

export const P = styled.p`
   text-decoration: none;
   color: ${(props) => props.theme.colors.width};
   font-family: "Roboto", sans-serif;
   font-weight: bold;
   display: block;
   padding: 20px 5px;
   padding-left: 20px;

   &:hover {
     background-color: ${(props) => props.theme.colors.tertiary};
     color: black;
   }
`;

export const Label = styled.label`
  padding: 0;
  position: relative;
  z-index: 11;
  margin: 0 10px;
`;

export const UL = styled.ul`
  list-style: none;
  top: 70px;
  width: 100%;
  position: absolute;
`;

export const ImMenuIcons = styled(ImMenu)`
  font-size: 35px;
  position: relative;
  color: ${(props) => props.theme.colors.gray};
  padding: 0;
  margin: 0;
`;


export const DarkDiv = styled.div`
position: absolute;
background: rgba(0,0,0,.1);
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 9;
  
`

export const InputCheck = styled.input`
  display: none;
  
  &[type="checkbox"]:checked ~ ${Nav} {
    transform: translateX(350px);
    transition: transform .5s;
   
   
  }
  &[type="checkbox"] ~ ${Nav} {
    transform: translateX(-350px);
    transition: transform .5s;
   
  
  }



  

`;

export const Span = styled.span`
  position: relative;
  top: 0px;
`;

export const SummaryMenu = styled.summary`
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
  cursor: pointer;
  padding: 1em 0.5em;
  list-style: none; // Remove arrow
  &::-webkit-details-marker {
    display: none; // Remove arrow
  }
`;

export const DetailsMenu = styled.details`
 
`;


export const HeaderMenu = styled.div`
background-color: ${props => props.theme.colors.secondary};
width: 100%;
height: 50px;
`

export const MainMenu = styled.div`

`


export const FooterMenu = styled.div`

`

