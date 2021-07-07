import React, { HTMLProps, ReactNode } from "react";

interface ClientFormProps {
  title: string;
  children: ReactNode;
  form?: HTMLProps<HTMLFormElement>;
}

function ClientForm(props: ClientFormProps) {
  return (
    <div className="max-w-xl">
      <h1 className="text-6xl font-medium text-center">{props.title}</h1>
      <form
        className="flex flex-col mt-4 p-12 border-2 border-black"
        {...props.form}
      >
        {props.children}
      </form>
    </div>
  );
}

export default ClientForm;
