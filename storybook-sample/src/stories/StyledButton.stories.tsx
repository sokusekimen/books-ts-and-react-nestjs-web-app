import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

const incrementAction = action('increment');

export const Primary: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
      incrementAction(e, count);
      setCount((c) => c + 1);
    }

    return (
      <StyledButton variant='primary' onClick={onClick}>
        Count: {count}
      </StyledButton>
    );
  }
};
export const Success: Story = {
  render: () => <StyledButton variant='success'>Success</StyledButton>
};
export const Transparent: Story = {
  render: () => <StyledButton variant='transparent'>Transparent</StyledButton>
};