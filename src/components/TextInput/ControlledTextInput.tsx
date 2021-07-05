import clsx from "clsx";
import React, { ChangeEvent } from "react";

type InputChange = ChangeEvent<HTMLInputElement>;
type TypeEventHandler = (value: string) => void;

export interface ControlledTextInputProps {
  name: string;
  id?: string;
  type?: "text" | "number" | "email" | "password" | "search";
  className?: string;
  placeholder?: string;
  value?: string | number;
  max?: number;
  min?: number;
  maxLength?: number;
  onType?: TypeEventHandler;
}

function ControlledTextInput(props: ControlledTextInputProps) {
  const type = props.type || "text";

  const changeHandler = (event: InputChange) =>
    props.onType && props.onType(event.target.value);

  return (
    <input {...props} type={type} id={props.id} onChange={changeHandler} />
  );
}

export default ControlledTextInput;
