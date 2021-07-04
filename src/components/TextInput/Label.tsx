import clsx from "clsx";
import React from "react";

interface LabelProps {
  children: string;
  forId: string;
  hidden?: boolean;
  className?: string;
}

function Label(props: LabelProps) {
  const { children, forId, hidden, className } = props;
  return (
    <label
      className={clsx(
        "text-sm font-medium block mb-1",
        { hidden: hidden },
        className
      )}
      htmlFor={forId}
    >
      {children}
    </label>
  );
}

export default Label;
