import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, textInputRootProps } from "./textInput";

export default {
  title: "Components/TextInput",
  component: TextInput.root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<textInputRootProps>;

export const Default: StoryObj<textInputRootProps> = {};

export const WithoutIcon: StoryObj<textInputRootProps> = {
  args: {
    children: <TextInput.input placeholder="Type your e-mail address" />,
  },
};
