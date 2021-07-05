import React, { ComponentProps } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import ProductCard from ".";

export default {
  title: "Component/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: Story<ComponentProps<typeof ProductCard>> = (args) => (
  <ProductCard {...args} className="w-64" />
);

const testProduct = {
  image:
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
  alt: "food",
  owner: "The Bakery",
  name: "Copa de chocolate delicioso",
  price: 800,
};

export const Default = Template.bind({});
Default.args = {
  product: testProduct,
};

export const LargeOwner = Template.bind({});
LargeOwner.args = {
  product: {
    ...testProduct,
    owner: "Some large owner name that don't exist",
  },
};

export const LargeName = Template.bind({});
LargeName.args = {
  product: {
    ...testProduct,
    name:
      "Some large name of a nice product that don't even exist but should occupy more than two lines",
  },
};

export const BigPrice = Template.bind({});
BigPrice.args = {
  product: {
    ...testProduct,
    price: 30000000,
  },
};

export const CustomCTA = Template.bind({});
CustomCTA.args = {
  product: testProduct,
  cta: "See product",
};
