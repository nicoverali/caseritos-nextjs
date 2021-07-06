import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import Footer from ".";

export default {
  title: "Section/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: Story<ComponentProps<typeof Footer>> = (args) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
Default.storyName = "Footer";
