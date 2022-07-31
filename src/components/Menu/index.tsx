import Link from "next/link";
import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Nav,
  Label,
  UL,
  ImMenuIcons,
  InputCheck,
  Span,
  SummaryMenu,
  DetailsMenu,
  DarkDiv,
  P,
  HeaderMenu,
  MainMenu,
  FooterMenu,
} from "./styles";
interface ISubMenu {
  id: number;
  menuIdFk: number;
  nameRota: string;
  nameSubMenu: string;
}
interface IMenu {
  menuId: number;
  menuName: string;
  subMenu: ISubMenu[];
}

const Menu: React.FC = () => {
  const [listRotas] = useState<IMenu[]>([]);
  const { signOut } = useContext(AuthContext);
  let [openMenu, setOpenMenu] = useState<boolean>(false);

  async function sairSistema() {
    signOut();
  }

  async function handleInputChecked(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    setOpenMenu(checked);
  }

  return (
    <div>
      <DarkDiv
        style={{ display: openMenu ? "" : "none" }}
        onClick={() => setOpenMenu(false)}
      ></DarkDiv>
      <InputCheck
        checked={openMenu}
        type="checkbox"
        id="check"
        onChange={handleInputChecked}
      />
      <Label htmlFor="check">
        <Span>
          <ImMenuIcons />
        </Span>
      </Label>

      <Nav>
        <HeaderMenu></HeaderMenu>
        <MainMenu>
          <UL>
            <li onClick={() => setOpenMenu(false)}>
              <Link href={`/home`}>
                <P>Home</P>
              </Link>
            </li>

            <DetailsMenu open={false}>
              <SummaryMenu>Banco</SummaryMenu>

              <li onClick={() => setOpenMenu(false)}>
                <Link href={`/`}>
                  <P>Banco</P>
                </Link>
              </li>
            </DetailsMenu>
          </UL>
        </MainMenu>

        <FooterMenu>
          <div
            onClick={() => {
              sairSistema();
            }}
          >
            <P>sair</P>
          </div>
        </FooterMenu>
      </Nav>
    </div>
  );
};

export default Menu;
