import clsx from "clsx";
import React from "react";
import ControlledTextInput from "./ControlledTextInput";
import { ControlledTextInputProps } from "./ControlledTextInput";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

interface TextInputProps extends ControlledTextInputProps {
  classes?: {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
  };
  label: string;
  hideLabel?: boolean;
  size?: "sm" | "md" | "lg";
  error?: string;
  width?: string;
}

const sizes = {
  sm: "py-2",
  md: "py-3",
  lg: "py-4",
};

function TextInput(props: TextInputProps) {
  const id = props.id || `input-${props.name}`;
  const size = sizes[props.size || "md"];
  const classes = props.classes || {};

  const { hideLabel, ...rest } = props;

  return (
    <div className={clsx(props.className, classes.container, props.width)}>
      <Label forId={id} hidden={hideLabel} className={classes.label}>
        {props.label}
      </Label>

      <ControlledTextInput
        {...rest}
        id={id}
        className={clsx(
          classes.input,
          size,
          "px-4 w-full border-2 border-gray-200 outline-none focus:border-black",
          { "border-error": props.error }
        )}
      />

      <ErrorMessage error={props.error} className={classes.error} />
    </div>
  );
}

export default TextInput;
