import type { Meta, StoryObj } from '@storybook/react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
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
} as Meta<typeof SearchIcon>

export const Normal: StoryObj<typeof SearchIcon> = {
  render: (args) => <SearchIcon {...args} />,
}
