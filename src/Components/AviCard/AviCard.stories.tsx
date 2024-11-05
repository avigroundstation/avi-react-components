// Card.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardContent, CardActions, Button, Typography, CardHeader } from '@mui/material';
import AviCard from './AviCard';

export default {
  title: 'Example/AviCard',
  component: AviCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined']
    }
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ height: '600px', width: '100%', backgroundColor: 'red' }}>
    <AviCard
      // contentVariant={'stretch'}
        title={'Card Title'}
        actions={
          <>
            <Button size="small">Action 1</Button>
            <Button size="small">Action 2</Button>
          </>
      }
    >
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "blue" }}>
        <div style={{ height: '20%' }}>
          div 1
        </div>
        <div style={{ flex: '1' }}>
          div2
        </div>
      </div>
    </AviCard>


  </div>
);

export const Default = Template.bind({});
Default.args = {
  elevation: 3, // example prop for the Card
  variant: 'elevation'

};
