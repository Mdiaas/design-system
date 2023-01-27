import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$2',
  right: '$2',
  display: 'flex',
  flexDirection: 'column',
  padding: '$1',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: 6,
  border: '1px solid $gray600',
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  lineHeight: 1.6,
  gap: '0.25rem',
})
export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontFamily: 'sans-serif',
  lineHeight: '2rem',
})
export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500',
})
