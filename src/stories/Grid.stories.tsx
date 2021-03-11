import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid, { IProps } from "../lib/Grid/Grid";
import Box from "../lib/Box/Box";

export default {
  title: "Example/Grid",
  component: Grid,
} as Meta;

const Template: Story<IProps> = (args) => <Grid {...args} />;

export const GridBox = Template.bind({});
GridBox.args = {
  templateRows: "repeat(3, 1fr)",
  templateColumns: "repeat(5, 1fr)",
  gap: 5,
  style: { backgroundColor: "cyan" },
  w: "100%",
  h: "100vh",
  children: [
    <>
      <Box start={1} colEnd={6} color="warning">
        <h3>Hello Warning Box</h3>
      </Box>
      <Box start={2} rowEnd={4} colEnd={1} color="primary">
        <h3>Hello Primary Box</h3>
      </Box>
      <Box start={2} colEnd={4} color="success">
        <h3>Hello Success Box</h3>
      </Box>
      <Box start={4} colEnd={6} color="primary">
        <h3>Hello Random Box</h3>
      </Box>
      <Box start={2} colEnd={6} color="danger">
        <h3>Hello Danger Box</h3>
      </Box>
    </>,
  ],
};
