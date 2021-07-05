import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import Counter from ".";

export default {
  title: "Input/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: Story<ComponentProps<typeof Counter>> = (args) => (
  <Counter {...args} input={{ onChange: console.log, ...args.input }} />
);

export const Default = Template.bind({});
Default.args = {
  input: {
    name: "counter-input",
    label: "counter",
  },
  width: "w-64",
};

export const MinMaxConstraint = Template.bind({});
MinMaxConstraint.args = {
  input: {
    name: "counter-input",
    label: "counter",
    min: 1,
    max: 10,
  },
  width: "w-64",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  input: {
    name: "counter-input",
    label: "counter",
  },
  size: "sm",
  width: "w-64",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  input: {
    name: "counter-input",
    label: "counter",
  },
  size: "md",
  width: "w-64",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  input: {
    name: "counter-input",
    label: "counter",
  },
  size: "lg",
  width: "w-64",
};

export const WithError = Template.bind({});
WithError.args = {
  input: {
    name: "counter-input",
    label: "counter",
    error: "An error occured",
  },
  width: "w-64",
};
