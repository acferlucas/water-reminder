import { PropsWithChildren } from 'react'
import { ModalBox } from './styles'


export function ReminderModalLayout({ children }: PropsWithChildren) {
  return (
    <ModalBox>
      {children}
    </ModalBox>
  )
}