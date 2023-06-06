import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { HStack } from 'shared/ui/Stack';
import { UserRole } from 'entities/User';
import { AvatarDropdown } from './AvatarDropdown';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <HStack justify="end">
    <AvatarDropdown {...args} />
  </HStack>
);

export const User = Template.bind({});
User.args = {};
User.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
        avatar:
          'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
      },
    },
  }),
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
        avatar:
          'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        roles: [UserRole.ADMIN],
      },
    },
  }),
];
