import type { Meta, StoryObj } from '@storybook/react'
import ShapeImage from './index'

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ShapeImage>

export const Circle: StoryObj<typeof ShapeImage> = {
  args: { src: '/images/sample/1.jpg', shape: 'circle' },
  render: (args) => <ShapeImage {...args} />,
}

export const Square: StoryObj<typeof ShapeImage> = {
  args: { src: '/images/sample/1.jpg', shape: 'square' },
  render: (args) => <ShapeImage {...args} />,
}
