import Action from "components/Action";
import Link from "next/link";
import React, { ReactNode } from "react";

interface DropdownItemProps {
  href: string;
  children?: ReactNode;
}

export default function DropdownItem({ href, children }: DropdownItemProps) {
  return (
    <li>
      <Link href={href} passHref>
        <Action className="inline-block w-full text-right py-2 mt-1 last:mb-1 px-6 bg-white hover:bg-gray-50">
          {children}
        </Action>
      </Link>
    </li>
  );
}
