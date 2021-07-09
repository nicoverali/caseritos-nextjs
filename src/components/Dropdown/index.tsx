import React, { Fragment, ReactElement, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Action from "components/Action";
import DropdownItem from "./DropdownItem";
import clsx from "clsx";

interface DropdownProps {
  label: string;
  className?: string;
  children?:
    | ReactElement<typeof DropdownItem>
    | ReactElement<typeof DropdownItem>[];
}

function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={clsx("relative inline-block", props.className)}>
      <Action
        className="flex items-center py-3 px-4 hover:bg-gray-50 border-2 border-black"
        onClick={toggleDropdown}
      >
        <p className="inline-block">{props.label}</p>
        <ChevronDownIcon
          className={clsx("w-4 ml-2 transition-all", { "rotate-180": open })}
        />
      </Action>
      <ul
        className={clsx(
          "absolute z-50 right-0 w-48 text-right shadow-md mt-2",
          {
            hidden: !open,
          }
        )}
      >
        {props.children}
      </ul>
    </div>
  );
}

export default Dropdown;
