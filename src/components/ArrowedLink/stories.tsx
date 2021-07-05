import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import ArrowedLink from ".";

export default {
  title: "Input/ArrowedLink",
  component: ArrowedLink,
} as ComponentMeta<typeof ArrowedLink>;

const Template: Story<ComponentProps<typeof ArrowedLink>> = (args) => (
  <ArrowedLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "ArrowedLink",
};

export const NarrowArrow = Template.bind({});
NarrowArrow.args = {
  label: "ArrowedLink",
  arrowSize: "narrow",
};

export const LinkTo = Template.bind({});
LinkTo.args = {
  label: "ArrowedLink",
  href: "#",
};
