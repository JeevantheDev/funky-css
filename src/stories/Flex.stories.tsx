import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Flex, { IProps as FlexProps } from "../lib/Flex/Flex";
import Box from "../lib/Box/Box";

export default {
  title: "Example/Flex",
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Flexbox = Template.bind({});
Flexbox.args = {
  w: 100,
  h: 100,
  justifyContent: "space-evenly",
  alignItems: "center",
  children: [
    <>
      <Box m={5} flex={1} w="50%" h="20%" color="primary">
        <h3>Hello Primary Box</h3>
      </Box>
      <Box m={5} flex={2} w="50%" h="20%" color="success">
        <h3>Hello Success Box</h3>
      </Box>
      <Box
        style={{ backgroundColor: "cyan", color: "white" }}
        m={5}
        flex={1}
        w="50%"
        h="20%"
      >
        <h3>Hello Random Box</h3>
      </Box>
      <Box m={5} flex={2} w="50%" h="20%" color="danger">
        <h3>Hello Danger Box</h3>
      </Box>
      <Box m={5} flex={1} w="50%" h="20%" color="warning">
        <h3>Hello Warning Box</h3>
      </Box>
    </>,
  ],
};
