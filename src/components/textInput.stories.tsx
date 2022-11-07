import { Envelope } from "phosphor-react";
import { StoryObj, Meta } from "@storybook/react";
import {
  TextInput,
  TextInputInputProps,
  textInputRootProps,
} from "./textInput";
export default {
  title: "components/TextInput",
  component: TextInput.root,

  args: {
    children: (
      <>
        <TextInput.icon>
          <Envelope />
        </TextInput.icon>
        <TextInput.input placeholder="Type your best email" />,
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  argTypes: {},
} as Meta<TextInputInputProps>;

export const Default: StoryObj<textInputRootProps> = {};
