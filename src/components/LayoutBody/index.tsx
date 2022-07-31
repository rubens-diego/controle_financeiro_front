import React, { ReactNode } from "react";
import Header from "../Header";

import { Container, DivCenter } from "./styles";

type AuthProviderProps = {
  children: ReactNode;
};

const LayoutBody = ({ children }: AuthProviderProps) => {
  return (
    <>
      <Header></Header>
      <Container>
        <DivCenter>{children}</DivCenter>
      </Container>
    </>
  );
};

export default LayoutBody;
