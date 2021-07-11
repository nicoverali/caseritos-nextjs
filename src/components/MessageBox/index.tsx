import clsx from "clsx";
import React, { ReactElement, ReactNode } from "react";
import Message, { MessageProps } from "./Message";

type MessageBoxChild = ReactElement<typeof Message>;

interface MessageBoxProps {
  style?: "error" | "success";
  children?: MessageBoxChild | MessageBoxChild[];
  className?: string;
}

const bgColors = {
  error: "bg-error-light",
  success: "bg-success-light",
};

function MessageBox({ style = "error", children, className }: MessageBoxProps) {
  if (!children) return null;

  const messages = Array.isArray(children) ? children : [children];

  return (
    <ul className={clsx("flex flex-col w-full", bgColors[style], className)}>
      {messages.map((m) =>
        React.cloneElement(m, { style: style } as MessageProps)
      )}
    </ul>
  );
}

export default MessageBox;
