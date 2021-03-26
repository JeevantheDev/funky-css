import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Alert, { IProps } from '../lib/Alert/Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<IProps> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Primary Alert',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  text: 'Success Alert',
  style: { color: 'red' },
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  text: 'Danger Alert',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  text: 'Warning Alert',
};

export const Random = Template.bind({});
Random.args = {
  type: 'primary',
  text: 'Random Alert',
  style: { backgroundColor: '#333' },
};
