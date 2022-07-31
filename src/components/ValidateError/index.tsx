import { ReactNode } from "react";
import { Container, MessageError } from "./styles";

interface IValidateError {
  children: ReactNode;
  messageError?: string;
}

const ValidateError: React.FC<IValidateError> = ({
  children,
  messageError = "",
}) => {
  return (
    <Container>
      {children}
      <MessageError>{messageError}</MessageError>
    </Container>
  );
};
export default ValidateError;
