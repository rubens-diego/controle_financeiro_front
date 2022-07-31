import styled from "styled-components";


export const Container = styled.div`
   
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;


`;
export const InputComponent = styled.input`

line-height: 1.3;
  color: ${props => props.theme.colors.secundary};
width: 100%;
margin: 2;
padding: 0;
border-radius: 8px;
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 500;
  background : transparent;
border-radius: 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  &:focus {

    outline: 0;
    
  }

  /* &:read-only {
    background-color: #f9f9f9;
    border: 1px solid #cac8c8;
    outline: 0;
    box-shadow: none;
  } */

`;

export const Label = styled.label`

font-size: 0.9rem;
margin-top: 3px;
margin-bottom: 5px;
font-weight: 400;


color: ${props => props.theme.colors.white};
  
  
  


`;