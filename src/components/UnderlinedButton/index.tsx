import React, { Fragment } from "react";
import Button, { ButtonProps } from "components/Button";
import Underline from "./Underline";

function UnderlineButton(props: ButtonProps) {
  return (
    <Button {...props}>
      <Fragment>
        {props.children}
        <Underline />
      </Fragment>
    </Button>
  );
}

export default UnderlineButton;
