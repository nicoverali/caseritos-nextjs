import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import SquareButton from ".";

export default {
  title: "Input/SquareButton",
  component: SquareButton,
} as ComponentMeta<typeof SquareButton>;

const Template: Story<ComponentProps<typeof SquareButton>> = (args) => (
  <SquareButton {...args}>
    <BadgeCheckIcon className="w-6" />
  </SquareButton>
);

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: "sm",
  primary: true,
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: "md",
  primary: true,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: "lg",
  primary: true,
};
