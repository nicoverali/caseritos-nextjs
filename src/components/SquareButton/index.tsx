import clsx from "clsx";
import Button, { ButtonProps } from "components/Button";
import React from "react";

const sizes = {
  sm: "px-2 py-2",
  md: "px-3 py-3",
  lg: "px-4 py-4",
};

export default function SquareButton(props: ButtonProps) {
  const { size = "md", className, ...rest } = props;

  return (
    <Button {...rest} size={size} className={clsx(sizes[size], className)} />
  );
}
