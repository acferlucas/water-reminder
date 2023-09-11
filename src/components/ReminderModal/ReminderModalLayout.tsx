import { PropsWithChildren } from 'react'
import { ModalBox, ModalOverlay } from './styles'


export function ReminderModalLayout({ children }: PropsWithChildren) {
  return (
    <ModalOverlay>
      <ModalBox>
        {children}
      </ModalBox>
    </ModalOverlay>
  )
}