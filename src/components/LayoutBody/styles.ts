import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: calc(100vh - 45px);
  z-index: 0;
`;
export const DivCenter = styled.div`

  position: relative;
  display: flex;
  background-color: ${props => props.theme.colors.secondary} !important;
  flex-direction: column;
  width: 90%;
  height: 98%;
  box-sizing: border-box;
  padding: 5px !important;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 5px;
  overflow-y: hidden;
  overflow-x: hidden;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);  

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;


