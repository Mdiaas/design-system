import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '4px',
  padding: '$3 $4',
  fontSize: '15px',
  lineHeight: 1,
  backgroundColor: '$gray900',
  color: '$gray100',
  display: 'flex',
  justifyContent: 'center',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})
