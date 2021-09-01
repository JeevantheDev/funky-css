import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Grid, { IProps } from '../lib/Grid/Grid';
import Box from '../lib/Box/Box';

export default {
  title: 'Example/Grid',
  component: Grid,
} as Meta;

const Template: Story<IProps> = (args) => <Grid {...args} />;

export const GridBox = Template.bind({});
GridBox.args = {
  templateRows: 'repeat(2, 1fr)',
  templateColumns: 'repeat(4, 1fr)',
  gap: '0.5rem',
  style: { backgroundColor: '#ccc', padding: '10px' },

  children: [
    <>
      <Box p={10} color="warning">
        <h2>Hello Warning Box 1</h2>
      </Box>
      <Box p={10} color="primary">
        <h2>Hello Primary Box 2</h2>
      </Box>
      <Box p={10} color="success">
        <h2>Hello Success Box 3</h2>
      </Box>
      <Box p={10} color="primary">
        <h2>Hello Random Box 4</h2>
      </Box>
      <Box p={10} color="danger">
        <h2>Hello Danger Box 5</h2>
      </Box>
      <Box p={10} color="warning">
        <h2>Hello Warning Box 1</h2>
      </Box>
      <Box p={10} color="primary">
        <h2>Hello Primary Box 2</h2>
      </Box>
      <Box p={10} color="success">
        <h2>Hello Success Box 3</h2>
      </Box>
      <Box p={10} color="primary">
        <h2>Hello Random Box 4</h2>
      </Box>
      <Box p={10} start={2} colEnd={5} color="danger">
        <h2>Hello Danger Box 5</h2>
      </Box>
      <Box p={10} start={1} colEnd={3} color="warning">
        <h2>Hello Warning Box</h2>
      </Box>
      <Box p={10} start={3} colEnd={5} color="primary">
        <h2>Hello Primary Box</h2>
      </Box>
      <Box p={10} start={1} colEnd={3} color="success">
        <h2>Hello Success Box</h2>
      </Box>
      <Box p={10} start={3} colEnd={5} color="primary">
        <h2>Hello Random Box</h2>
      </Box>
      <Box p={10} start={1} colEnd={5} color="danger">
        <h2>Hello Danger Box</h2>
      </Box>
    </>,
  ],
};
