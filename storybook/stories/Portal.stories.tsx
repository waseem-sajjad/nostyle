import type { Meta, StoryObj } from '@storybook/react';

import { Portal } from '@nostyle/portal';

const meta = {
  title: 'Portal',
  component: Portal,
  parameters: {
    layout: 'centered',
  },
  tags: ['portal', 'autodocs'],
} satisfies Meta<typeof Portal>;

export default meta;
type PortalStory = StoryObj<typeof Portal>;

export const Default: PortalStory = {
  args: {
    children: (
      <div
        style={{
          fontFamily: 'sans-serif',
          zIndex: 100,
          position: 'fixed',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            background: '#fff',
            padding: '1rem',
            borderRadius: '0.5rem',
          }}
        >
          Portal
        </h1>
      </div>
    ),
  },
  argTypes: {},
  parameters: {},
};
