import { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as MuiIcons from '@mui/icons-material'

import AviButtonIcon from './AviButtonIcon';
import React from 'react';

export default {
  title: 'Example/AviButtonIcon',
  component: AviButtonIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children:{control:'select',
      options:Object.keys(MuiIcons)},
  },
  
} as Meta;


interface IconButtonStoryProps {
  children: keyof typeof MuiIcons
}

const Template: StoryFn<IconButtonStoryProps> = (arg) => {
  const IconComponent = MuiIcons[arg.children]
  return (
    <AviButtonIcon onClick={()=>{}}>
      <IconComponent />
    </AviButtonIcon>
  );
}

export const Default = Template.bind({});

Default.args = {
  children:'Abc',
};
