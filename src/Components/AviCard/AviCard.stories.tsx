// Card.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardContent, CardActions, Button, Typography, CardHeader } from '@mui/material';
import AviCard from './AviCard';
import { theme } from '../../theme';

export default {
  title: 'Example/AviCard',
  component: AviCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title:{control:'text'},
    subtitle:{control:'text'},
    actions:{table:{disable:true}},
    children:{table:{disable:true}}
    // backgroundColor: { control: 'color' },
    // contentVariant: {
    //   control: 'select',
    //   options: ['elevation', 'outlined']
    // }
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ height: '600px', width: '100%' }}>
    <AviCard
      elevation={args.elevation}
      contentVariant={args.contentVariant}
        title={args.title}
        subtitle={args.subtitle}
        actions={args.actions }
    >
      {args.children}
    </AviCard>


  </div>
);

const body = <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
<div style={{ height: '20%' }}>
  <Typography variant='h5'>Text</Typography>
  {/* <Typography variant='body2' sx={{fontSize:"1.2rem", color:theme.palette.subtitle}}>Text</Typography> */}
</div>
<div style={{ flex: '1' }}>
  div2
</div>
</div>

const actions =  <>
<Button size="small">Action 1</Button>
<Button size="small">Action 2</Button>
</>

export const Default = Template.bind({});
Default.args = {
  elevation: 3, // example prop for the Card
  contentVariant: 'regular',
  title:"Card title",
  actions:actions,
  children:body
};

export const subHeader = Template.bind({});
subHeader.args = {
  elevation: 3, // example prop for the Card
  contentVariant: 'regular',
  title:"Card title",
  subtitle:"Card subtitle",
  actions:actions,
  children:body

};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  elevation: 3, // example prop for the Card
  contentVariant: 'stretch',
  children:body
};

export const WithoutBody = Template.bind({});
WithoutBody.args = {
  elevation: 3, // example prop for the Card
  contentVariant: 'regular',
  title:"Card title",
  actions:actions,

};