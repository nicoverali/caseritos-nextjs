import clsx from "clsx";
import React, { ReactNode } from "react";

interface FormErrorBoxProps {
  children?: ReactNode;
  className?: string;
}

function FormErrorBox({ children, className }: FormErrorBoxProps) {
  return (
    <ul className={clsx("flex flex-col w-full bg-red-50", className)}>
      {children}
    </ul>
  );
}

export default FormErrorBox;
