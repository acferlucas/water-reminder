import { PropsWithChildren } from "react";
import { ReminderModal } from "..";

type ModalProps = {
  isOpen: boolean;
}

export default function Modal({ isOpen, children }: PropsWithChildren<ModalProps>) {
  if(!isOpen) {
    return null;
  }

  return (
    <ReminderModal.layout>
     { children }
    </ReminderModal.layout>
  )
}