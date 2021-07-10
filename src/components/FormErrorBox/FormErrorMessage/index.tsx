import clsx from "clsx";
import React, { ReactNode } from "react";

interface FormErrorMessageProps {
  show: boolean;
  children: ReactNode;
  className?: string;
}

function FormErrorMessage(props: FormErrorMessageProps) {
  if (!props.show) {
    return null;
  }

  return (
    <li
      className={clsx(
        "py-4 px-12 border-error border-l border-r first:border-t last:border-b relative",
        "before:w-1 before:h-1 before:bg-error before:absolute before:top-7 before:left-8",
        "only:before:hidden only:text-center",
        props.className
      )}
    >
      {props.children}
    </li>
  );
}

export default FormErrorMessage;
