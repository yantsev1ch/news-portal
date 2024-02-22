import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentsList } from './CommentsList';

export default {
  title: 'entities/Comment/CommentsList',
  component: CommentsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => (
  <CommentsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'Vasya' },
      text: 'comment1',
    },
    {
      id: '2',
      user: { id: '1', username: 'Vasya' },
      text: 'comment2',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
