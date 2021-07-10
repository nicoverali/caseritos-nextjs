import clsx from "clsx";
import React, { ChangeEvent } from "react";

type InputChange = ChangeEvent<HTMLInputElement>;
type TypeEventHandler = (value: string, name: string) => void;

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
  const { onType, ...rest } = props;

  const changeHandler = (event: InputChange) =>
    onType && onType(event.target.value, event.target.name);

  return <input {...rest} type={type} id={props.id} onChange={changeHandler} />;
}

export default ControlledTextInput;
