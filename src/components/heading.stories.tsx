import { StoryObj, Meta } from "@storybook/react";
import { Headin, Headingprops } from "./heading";
export default {
  title: "components/heading",
  component: Headin,
  args: {
    children: "loren ipsum",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
} as Meta<Headingprops>;

export const Default: StoryObj<Headingprops> = {};
export const small: StoryObj<Headingprops> = {
  args: {
    size: "sm",
  },
};
export const large: StoryObj<Headingprops> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<Headingprops> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
