import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  children: ReactNode
  title: string
  description: string
}
export function TooltipDefault({ children, title, description }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            {description}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
