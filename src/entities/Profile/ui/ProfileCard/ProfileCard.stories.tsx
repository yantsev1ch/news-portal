import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: { avatar: Avatar },
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
  data: { avatar: Avatar },
};
