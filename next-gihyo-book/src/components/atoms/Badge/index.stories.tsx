import type { Meta, StoryObj } from '@storybook/react'
import Badge from './index'

export default {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Badge>

export const Orange: StoryObj<typeof Badge> = {
  args: { content: '1', backgroundColor: '#ed9f28' },
  render: (args) => <Badge {...args} />,
}

export const Green: StoryObj<typeof Badge> = {
  args: { content: '2', backgroundColor: '#32bf00' },
  render: (args) => <Badge {...args} />,
}

export const Red: StoryObj<typeof Badge> = {
  args: { content: '10', backgroundColor: '#d4001a' },
  render: (args) => <Badge {...args} />,
}
