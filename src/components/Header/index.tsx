import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import Menu from "../Menu";

import { DivIcon, HeaderContainer, MdOutlineLogoutIcons } from "./styles";
const Header: React.FC = () => {
  const { user, signOut, isAuthenticated } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <Menu />

      <div style={{ width: "100%", height: "45px" }}></div>

      <DivIcon onClick={signOut}>
        <MdOutlineLogoutIcons />
      </DivIcon>
    </HeaderContainer>
  );
};

export default Header;
