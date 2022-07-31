import React, { ReactNode } from "react";
import {
  TelaFlutuante,
  Component,
  BarraSuperior,
  MdDeleteForeverIcon,
  FecharTela,
} from "./styles";

interface ITela {
  children: ReactNode;
  telaWidth?: string;
  telaHeight?: string;
  readonly fechar: (arg0: string) => void;
}

const TelasFlutuantes: React.FC<ITela> = ({
  children,
  telaWidth,
  telaHeight,
  fechar,
}) => {
  const buttonFechar = () => {
    fechar("none");
  };

  return (
    <TelaFlutuante style={{ width: telaWidth, height: telaHeight }}>
      <BarraSuperior>
        <FecharTela onClick={buttonFechar}>
          <MdDeleteForeverIcon />
        </FecharTela>
      </BarraSuperior>

      <Component>{children}</Component>
    </TelaFlutuante>
  );
};

export default TelasFlutuantes;
