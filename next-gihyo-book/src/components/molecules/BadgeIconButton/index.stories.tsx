import type { Meta, StoryObj } from '@storybook/react'
import BadgeIconButton from './index'
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from 'components/atoms/IconButton'

export default {
  title: 'Molecules/BadgeIconButton',
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: 'バッジのカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof BadgeIconButton>

export const SearchBadgeIcon: StoryObj<typeof BadgeIconButton> = {
  args: {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#ed9f28',
  },
  render: (args) => <BadgeIconButton {...args} />,
}

export const PersonBadgeIcon: StoryObj<typeof BadgeIconButton> = {
  args: {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#d4001a',
  },
  render: (args) => <BadgeIconButton {...args} />,
}

export const ShoppingCartBadgeIcon: StoryObj<typeof BadgeIconButton> = {
  args: {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#32bf00',
  },
  render: (args) => <BadgeIconButton {...args} />,
}
