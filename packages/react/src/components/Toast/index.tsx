import * as Toast from '@radix-ui/react-toast'
import { ReactNode, useState } from 'react'
import { Button } from '../Button'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
export interface ToastDefaultProps {
  children: ReactNode
  title: string
  description: string
}
export function ToastDefault({
  children,
  title,
  description,
}: ToastDefaultProps) {
  const [open, setOpen] = useState(false)

  function handleOpenToast() {
    setOpen(true)
  }
  return (
    <Toast.Provider swipeDirection="right">
      <Button onClick={handleOpenToast}>{children}</Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>
        <ToastDescription asChild>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastClose asChild>
          <button>
            <X size={20} />
          </button>
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}
