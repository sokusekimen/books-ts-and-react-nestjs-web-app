import type { Meta, StoryObj } from '@storybook/react';
import ProductForm from './index'

export default {
  title: 'Organisms/ProductForm',
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof ProductForm>

export const Form: StoryObj<typeof ProductForm> = {
  render: (args) => <ProductForm {...args} />,
}