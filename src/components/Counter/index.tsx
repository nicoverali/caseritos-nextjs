import React from "react";
import SquareButton from "components/SquareButton";
import TextInput from "components/TextInput";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import useCounter, {
  CounterChangeHandler,
  InvalidValueHandler,
} from "./useCounter";

interface CounterProps {
  input: {
    name: string;
    label: string;
    min?: number;
    max?: number;
    value?: number;
    error?: string;
    onChange?: CounterChangeHandler;
    onInvalid?: InvalidValueHandler;
  };
  width?: string;
  size?: "sm" | "md" | "lg";
}

const iconSizes = {
  sm: "w-6",
  md: "w-6",
  lg: "w-6",
};

function Counter(props: CounterProps) {
  const { input } = props;
  const { size = "md", width } = props;

  const [counter, setCounter, increment, decrement] = useCounter(
    0,
    input.min,
    input.max,
    input.onChange,
    input.onInvalid
  );

  return (
    <div className={clsx("flex", width)}>
      <SquareButton className="z-10" size={size} onClick={decrement} secondary>
        <MinusIcon className={iconSizes[size]} />
      </SquareButton>
      <TextInput
        {...input}
        type="number"
        hideLabel
        size={size}
        value={counter}
        onType={setCounter}
        error="error"
        classes={{
          container: "focus:z-20 flex-grow",
          input: "text-center w-full h-full py-0",
        }}
      />
      <SquareButton className="z-10" size={size} onClick={increment} secondary>
        <PlusIcon className={iconSizes[size]} />
      </SquareButton>
    </div>
  );
}

export default Counter;
