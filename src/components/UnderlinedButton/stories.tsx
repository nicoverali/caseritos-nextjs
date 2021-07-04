import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import UnderlineButton from ".";

export default {
  title: "Input/UnderlineButton",
  component: UnderlineButton,
} as ComponentMeta<typeof UnderlineButton>;

const Template: Story<ComponentProps<typeof UnderlineButton>> = (args) => (
  <UnderlineButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  secondary: true,
};

export const LargeText = Template.bind({});
LargeText.args = {
  children: "This is a large button",
  primary: true,
};
