import React, { ReactNode } from "react";
import Action from "components/Action";
import clsx from "clsx";

interface ContainerProps {
  classNames?: string;
  children: ReactNode;
}

export default function ProductCardContaine(props: ContainerProps) {
  return (
    <Action
      className={clsx(
        "flex flex-col ring-black outline-none rounded-none focus:ring hover:ring group transition-all duration-200 ease-bounce-in",
        props.classNames
      )}
    >
      {props.children}
    </Action>
  );
}
