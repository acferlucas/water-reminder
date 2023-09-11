import { X } from "lucide-react";
import { ButtonModal } from "./styles";

type ReminderModalButtonProps = {
  handlerButtonClicked: () => void
}

export function ReminderModalButton({ handlerButtonClicked } : ReminderModalButtonProps) {
  return (
      <ButtonModal onClick={handlerButtonClicked}>
        <X />
      </ButtonModal>
  )
}