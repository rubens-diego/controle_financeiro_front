import React, { ReactNode } from "react";
import { Container, DivLoading, Loader } from "./styles";

interface IStyles {
  displayLoading?: string;
  children: ReactNode;
}

const Loading = ({ children, displayLoading = "none" }: IStyles) => {
  return (
    <DivLoading style={{ display: displayLoading }}>
      <Container>
        <Loader></Loader>
      </Container>
    </DivLoading>
  );
};

export default Loading;
