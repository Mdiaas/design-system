import type { StoryObj, Meta } from '@storybook/react'
import { Button, TooltipDefault, TooltipProps } from '@myown-ui/react'
export default {
  title: 'Surfaces/Tooltip',
  component: TooltipDefault,
  args: {
    children: <Button>Hover me</Button>,
    description: 'Sexta-feira, 27 de janeiro de 2023',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
