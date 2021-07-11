import clsx from "clsx";
import React, { ChangeEvent, HTMLProps } from "react";

type InputChange = ChangeEvent<HTMLInputElement>;
type TypeEventHandler = (value: string, name: string) => void;

export interface ControlledTextInputProps extends HTMLProps<HTMLInputElement> {
  ariaLabelledby?: string;
  className?: string;
  onType?: TypeEventHandler;
}

function ControlledTextInput(props: ControlledTextInputProps) {
  const { onType, ariaLabelledby, ...rest } = props;

  const changeHandler = (event: InputChange) =>
    onType && onType(event.target.value, event.target.name);

  return (
    <input
      aria-labelledby={ariaLabelledby}
      {...rest}
      onChange={changeHandler}
    />
  );
}

export default ControlledTextInput;
