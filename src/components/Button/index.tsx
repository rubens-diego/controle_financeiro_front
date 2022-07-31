import { ButtonHTMLAttributes, ReactNode } from "react";
import { Component } from "./styled.module";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: IButton) => {
  return <Component {...rest}>{children}</Component>;
};
