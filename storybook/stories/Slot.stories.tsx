import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from '@nostyle/slot';
import { forwardRef } from 'react';
import Link from 'next/link';

type ButtonProps = {
  asChild?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const Component = props.asChild ? Slot : 'button';

    return (
      <Component
        style={{
          background: '#1ea7fd',
          color: 'white',
          padding: '0.7rem 2rem',
          borderRadius: '4px',
          border: 'none',
          fontFamily: 'sans-serif',
          cursor: 'pointer',
        }}
        {...props}
        ref={forwardedRef}
      >
        <Link href="/">Button</Link>
      </Component>
    );
  }
);

Button.displayName = 'Button';

const meta = {
  title: 'Slot',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['slot', 'autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type SlotStory = StoryObj<typeof Button>;

export const Default: SlotStory = {
  args: {
    asChild: true,
  },
  argTypes: {},
  parameters: {},
};
