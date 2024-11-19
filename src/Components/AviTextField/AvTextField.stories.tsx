import { Meta, StoryFn, StoryObj } from "@storybook/react";

import React from "react";
import AviTextField from "./AviTextField";

export default {
  title: "Example/AviTextFieldIcon",
  component: AviTextField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // children: { control: "select", options: Object.keys(MuiIcons) },
  },
} as Meta;

interface TextFieldStoryProps {
  // children: keyof typeof MuiIcons;
}

const Template: StoryFn = (args) => {
  return (
    <AviTextField
      label={args.label}
      placeholder={args.placeholder}
      shrink={args.shrink}
      onChange={() => {}}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  // children: "Abc",
};
