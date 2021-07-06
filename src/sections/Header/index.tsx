import AppContainer from "components/AppContainer";
import React, { ReactNode } from "react";
import clsx from "clsx";

export type LiftChangeHandler = (lifted: boolean) => void;
interface HeaderProps {
  bg?: string;
  bgUnlift?: string;
  bgLift?: string;
  lift?: boolean;
  children?: ReactNode;
}

function Header(props: HeaderProps) {
  const { bgUnlift = "bg-transparent", bgLift = "bg-white", bg } = props;
  const { lift = false } = props;

  return (
    <div
      className={clsx(
        "fixed top-0 w-full transition-all duration-200",
        !lift && (bg || bgUnlift),
        lift && `${bg || bgLift} shadow`
      )}
    >
      <AppContainer className="flex h-20">{props.children}</AppContainer>
    </div>
  );
}

export default Header;
