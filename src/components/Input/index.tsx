import { InputHTMLAttributes } from "react";
import { Container, InputComponent, Label } from "./styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...rest }: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent {...rest} />
    </Container>
  );
};
