import { ComponentStory, ComponentMeta } from "@storybook/react";
import { text, TextProps } from "./text";
export default {
  title: "components/text",
  component: text,
  args: {
    children: "loren ipsum",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
} as ComponentMeta<TextProps>;

export const Default: ComponentStory<TextProps> = {};
export const small: ComponentStory<TextProps> = {
  args: {
    size: "sm",
  },
};
export const large: ComponentStory<TextProps> = {
  args: {
    size: "lg",
  },
};

export const customComponent: ComponentStory<TextProps> = {
  args: {
    aschild: true,
    children: <p>testin with p tag</p>,
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
