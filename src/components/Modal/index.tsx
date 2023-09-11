import { ReminderModal } from "..";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if(!isOpen) {
    return null;
  }

  return (
    <ReminderModal.layout>
      <ReminderModal.button handlerButtonClicked={onClose} />
      <ReminderModal.image type='water' />
      <ReminderModal.text text='lembrete para beber água' />
    </ReminderModal.layout>
  )
}