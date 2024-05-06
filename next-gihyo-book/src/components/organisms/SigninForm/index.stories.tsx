import type { Meta, StoryObj } from '@storybook/react';
import SigninForm from './index'

export default {
  title: 'Organisms/SigninForm',
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof SigninForm>

export const Form: StoryObj<typeof SigninForm> = {
  render: (args) => <SigninForm {...args} />,
}