import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from './Button';
import Button, { IProps } from '../lib/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Primary Button',
  onClick: () => {
    alert('Button clicked');
  },
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  text: 'Success Button',
  style: { color: 'red' },
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  text: 'Danger Button',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  text: 'Warning Button',
};

export const Random = Template.bind({});
Random.args = {
  color: 'primary',
  text: 'Random Button',
  style: { backgroundColor: '#333' },
};
