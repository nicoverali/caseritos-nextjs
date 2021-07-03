import React from "react";

export type HTMLButtonType = "submit" | "reset" | "button";

export interface ActionProps {
  href?: string;
  type?: HTMLButtonType;
  children: JSX.Element | string;
  className?: string;
}

export default function Action(props: ActionProps) {
  const Component = props.href ? "a" : "button";
  const type: HTMLButtonType = props.type || "button";

  return (
    <Component
      href={props.href}
      type={Component == "button" ? type : undefined}
      className={props.className}
    >
      {props.children}
    </Component>
  );
}
