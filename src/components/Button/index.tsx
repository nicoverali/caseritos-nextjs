import Action, { ActionProps } from "components/Action";
import Underline from "./Underline";
import React, { Fragment } from "react";
import clsx from "clsx";

interface ButtonProps extends ActionProps {
  primary?: boolean;
  secondary?: boolean;
  size?: "sm" | "md" | "lg";
}

const colors = {
  default: "text-black bg-white hover:bg-gray-50 active:bg-gray-100",
  primary: `text-white bg-primary hover:bg-primary-light active:bg-primary-dark`,
  secondary: "text-white bg-black hover:bg-black-light active:bg-black-dark",
};

const sizeStyle = {
  sm: "py-2 px-10",
  md: "py-3 px-12",
  lg: "py-4 px-14",
};

export default function Button({ size = "md", ...props }: ButtonProps) {
  const style = getStyle(props);
  const color = colors[style];
  const padding = sizeStyle[size];
  const baseClass =
    "inline-block group rounded-none outline-none border-black focus-visible:border-2";

  return (
    <Action
      {...props}
      className={clsx(baseClass, color, padding, props.className)}
    >
      <Fragment>
        {props.children}
        <Underline />
      </Fragment>
    </Action>
  );
}

function getStyle(props: ButtonProps) {
  return (
    (props.primary && "primary") ||
    (props.secondary && "secondary") ||
    "default"
  );
}
