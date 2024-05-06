import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      // docsに表示する内容を設定
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'ボタンの横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'ボタンの縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Button>

// Primaryボタン
export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  },
  render: (args) => <Button {...args} />,
}

// Secondaryボタン
export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  },
  render: (args) => <Button {...args} />,
}

// Disabledボタン
export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  render: (args) => <Button {...args} />,
}
