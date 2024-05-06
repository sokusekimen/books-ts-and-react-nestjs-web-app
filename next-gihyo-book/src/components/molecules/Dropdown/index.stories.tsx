import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './index'

export default {
  title: 'Molecules/Dropdown',
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' },
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
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Dropdown>

export const Normal: StoryObj<typeof Dropdown> = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
  },
  render: (args) => <Dropdown {...args} />,
}

export const InitialValue: StoryObj<typeof Dropdown> = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
    value: 'one',
  },
  render: (args) => <Dropdown {...args} />,
}

export const Many: StoryObj<typeof Dropdown> = {
  args: {
    options: Array.from(Array(20), (_v, k) => {
      return { value: k.toString(), label: k.toString() }
    }),
    placeholder: 'Please select items from the list',
  },
  render: (args) => <Dropdown {...args} />,
}
