import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const notification: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
};

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          ...notification,
          id: '1',
        },
        {
          ...notification,
          id: '2',
        },
        {
          ...notification,
          id: '3',
        },
      ],
    },
  ],
};

export const WithLink = Template.bind({});
WithLink.args = {};
WithLink.decorators = [StoreDecorator({})];
WithLink.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          ...notification,
          id: '1',
          href: 'https://test.test',
        },
        {
          ...notification,
          id: '2',
          href: 'https://test.test',
        },
        {
          ...notification,
          id: '3',
          href: 'https://test.test',
        },
      ],
    },
  ],
};
