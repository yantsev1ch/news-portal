import React from 'react';
import { Story } from '@storybook/react';
import isLokiRunning from '@loki/is-loki-running';

const DisableAnimationsContext = React.createContext(false);

export const withDisabledAnimations = (StoryComponent: Story) => (
  <DisableAnimationsContext.Provider value={isLokiRunning()}>
    <StoryComponent />
  </DisableAnimationsContext.Provider>
);
