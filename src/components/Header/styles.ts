import { MdOutlineLogout } from "react-icons/md";
import styled from "styled-components";

export const HeaderContainer = styled.div`
position: relative;
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 45px;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);     

`

export const MdOutlineLogoutIcons = styled(MdOutlineLogout)`
  font-size: 35px;
  position: relative;
  color: ${(props) => props.theme.colors.gray};
  padding: 0;
  margin: 0;

  :hover {
    
    color: ${(props) => props.theme.colors.black};

  }

`;

export const DivIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
 width: 50px;
  height: 45px ;
margin-right: 15px;
border-radius: 5px;
  :hover {
    
    background-color: ${(props) => props.theme.colors.primary};

  }

`