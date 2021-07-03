import clsx from "clsx";
import React from "react";
import ControlledTextInput, {
  ControlledTextInputProps,
} from "./ControlledTextInput";

interface TextInputProps extends ControlledTextInputProps {
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

  return (
    <div className={props.className}>
      <label
        className={clsx("text-sm font-medium block mb-1", {
          hidden: props.hideLabel,
        })}
        htmlFor={id}
      >
        {props.label}
      </label>

      <ControlledTextInput
        {...props}
        id={id}
        className={clsx(
          props.width,
          size,
          "px-4 border border-gray-200 outline-none focus-visible:border-black focus-visible:border-2",
          { "border-error": props.error }
        )}
      />

      <p className={clsx("text-xs mt-1 text-error", { hidden: !props.error })}>
        {props.error}
      </p>
    </div>
  );
}

export default TextInput;
