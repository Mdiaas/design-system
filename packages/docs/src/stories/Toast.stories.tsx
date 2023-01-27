import type { StoryObj, Meta } from '@storybook/react'
import { ToastDefault, ToastDefaultProps } from '@myown-ui/react'
export default {
  title: 'Surfaces/ToastDefault',
  component: ToastDefault,
  args: {
    children: 'Open',
    description: 'Sexta-feira, 27 de janeiro de 2023',
    title: 'Agendamento realizado',
  },
} as Meta<ToastDefaultProps>

export const Primary: StoryObj<ToastDefaultProps> = {}
