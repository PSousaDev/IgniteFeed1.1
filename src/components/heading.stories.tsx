import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<Headingprops>;

export const Default: ComponentStory<Headingprops> = {};
export const small: ComponentStory<Headingprops> = {
  args: {
    size: "sm",
  },
};
export const large: ComponentStory<Headingprops> = {
  args: {
    size: "lg",
  },
};

export const customComponent: ComponentStory<Headingprops> = {
  args: {
    aschild: true,
    children: <h1>testin with h1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  aschild: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
