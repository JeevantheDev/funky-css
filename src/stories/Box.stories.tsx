import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Box, { IProps } from "../lib/Box/Box";
import Button from "../lib/Button/Button";
import Flex from "../lib/Flex/Flex";

export default {
  title: "Example/Box",
  component: Box,
} as Meta;

const Template: Story<IProps> = (args) => <Box {...args} />;

export const Card = Template.bind({});
Card.args = {
  color: "primary",
  w: "25vw",
  h: "60vh",
  style: { color: "white" },
  children: [
    <>
      <Flex
        w="100vw"
        h="60vh"
        flexDirection="column"
        justifyContent="space-between"
      >
        <>
          <Box flex={2} w="25%" h="50%" style={{ backgroundColor: "#333" }}>
            <Flex
              w="100%"
              h="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <>
                <h3>Hello Danger Box</h3>
                <Button color="danger" text="Danger" />
              </>
            </Flex>
          </Box>
          <Box flex={1} w="25%" h="50%" color="warning">
            <Flex
              w="100%"
              h="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <>
                <h3>Hello Warning Box</h3>
                <Button color="primary" text="Primary" />
              </>
            </Flex>
          </Box>
        </>
      </Flex>
    </>,
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  w: "10%",
  h: "20%",
  children: [
    <>
      <h3>Hello Primary Box</h3>
    </>,
  ],
};
export const Success = Template.bind({});
Success.args = {
  color: "success",
  w: "10%",
  h: "20%",
  style: { color: "red" },
  children: [
    <>
      <h3>Hello Success Box</h3>
    </>,
  ],
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  w: "10%",
  h: "20%",
  children: [
    <>
      <h3>Hello Danger Box</h3>
    </>,
  ],
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  w: "10%",
  h: "20%",
  children: [
    <>
      <h3>Hello Warning Box</h3>
    </>,
  ],
};

export const Random = Template.bind({});
Random.args = {
  color: "random",
  w: "30%",
  h: "60%",
  style: { backgroundColor: "#333", color: "white" },
  children: [
    <>
      <h3>Hello Random Box</h3>
    </>,
  ],
};
