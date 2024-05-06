import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof Input>

export const Normal: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
}
export const Error: StoryObj<typeof Input> = {
  args: { hasError: true },
  render: (args) => <Input {...args} />,
}
