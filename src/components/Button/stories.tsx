import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Input/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: "Button",
};

export const Neutral = Template.bind({});
Neutral.args = {
  children: "Button",
};
Neutral.parameters = {
  backgrounds: { default: "dark" },
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  primary: true,
  size: "sm",
  children: "Button",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  primary: true,
  size: "md",
  children: "Button",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  primary: true,
  size: "lg",
  children: "Button",
};

export const AsLink = Template.bind({});
AsLink.args = {
  primary: true,
  href: "#",
  children: "Button",
};
