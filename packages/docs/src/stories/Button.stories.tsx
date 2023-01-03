import type { StoryObj, Meta } from '@storybook/react'
import { Button, Buttonprops } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<Buttonprops>

export const Primary: StoryObj<Buttonprops> = {}
export const Big: StoryObj<Buttonprops> = {
  args: {
    size: 'big',
  },
}
