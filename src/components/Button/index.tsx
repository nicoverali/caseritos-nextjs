import Action, { ActionProps } from "components/Action";
import React from "react";
import clsx from "clsx";

export interface ButtonProps extends ActionProps {
  style?: "default" | "primary" | "secondary" | "negative";
  size?: "sm" | "md" | "lg";
}

const styles = {
  default: `bg-white ring-black hover:bg-gray-50 active:bg-gray-100 border-transparent`,
  primary: `text-white ring-primary-light bg-primary hover:bg-primary-light active:bg-primary-dark border-transparent`,
  secondary: `text-white bg-black ring-black hover:bg-black-light active:bg-black-dark border-transparent`,
  negative: `bg-white ring-black hover:bg-gray-50 active:bg-gray-100 border-black`,
};

const sizes = {
  sm: "py-2 px-10",
  md: "py-3 px-12",
  lg: "py-4 px-14",
};

function Button({ size = "md", style = "default", ...props }: ButtonProps) {
  const baseClass =
    "inline-block group rounded-none outline-none ring-offset-1 focus-visible:ring border-2";

  return (
    <Action
      {...props}
      className={clsx(baseClass, styles[style], sizes[size], props.className)}
    >
      {props.children}
    </Action>
  );
}

export default Button;
