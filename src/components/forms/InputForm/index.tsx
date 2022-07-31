import React, { useRef, useEffect, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";
import { Container, InputComponent, Label } from "./styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function InputForm({ name, label, ...rest }: IInput) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label htmlFor={fieldName}>{label}</Label>

      <InputComponent
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {/* {error && <span className="error">{error}</span>} */}
    </Container>
  );
}
