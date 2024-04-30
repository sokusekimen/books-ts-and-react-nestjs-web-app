import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton, StyledButtonProps } from '../components/StyledButton';

const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // コンポーネントだけでなくテキストもChildrenなのね
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TemplateTest: StoryObj<typeof StyledButton> = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
  render: (args) => <StyledButton {...args} />,
};
