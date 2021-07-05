import React from "react";
import { ArrowNarrowRightIcon, ArrowRightIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Action, { ActionProps } from "components/Action";

interface ArrowedLinkProps extends Omit<ActionProps, "children"> {
  label: string;
  classes?: {
    container?: string;
    label?: string;
    arrow?: string;
  };
  arrowSize?: "normal" | "narrow";
  className?: string;
}

export default function ArrowedLink(props: ArrowedLinkProps) {
  const classes = props.classes || {};
  const Arrow =
    props.arrowSize == "narrow" ? ArrowNarrowRightIcon : ArrowRightIcon;

  return (
    <Action
      href={props.href}
      className={clsx("flex items-center", classes.container)}
    >
      <span className={clsx("text-sm mr-2", classes.label)}>{props.label}</span>
      <Arrow className={clsx("w-4", classes.arrow)} />
    </Action>
  );
}
