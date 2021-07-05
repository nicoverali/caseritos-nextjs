import React, { MouseEventHandler } from "react";

export type HTMLButtonType = "submit" | "reset" | "button";
export type ActionClickEvent = MouseEventHandler<
  HTMLButtonElement | HTMLAnchorElement
>;

export interface ActionProps {
  href?: string;
  type?: HTMLButtonType;
  children: JSX.Element | string;
  className?: string;
  onClick?: ActionClickEvent;
}

export default function Action(props: ActionProps) {
  const Component = props.href ? "a" : "button";
  const type: HTMLButtonType = props.type || "button";

  return (
    <Component
      href={props.href}
      type={Component == "button" ? type : undefined}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Component>
  );
}
