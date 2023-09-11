import { Input } from "..";
import { InputTimerWrapper } from "./styles";

type InputTimerProps = {
  timerHours: number;
  timerMinutes: number;
  handlerChangeHours: (value: React.SetStateAction<number>) => void
  handlerChangeMinutes: (value: React.SetStateAction<number>) => void
}

export default function InputTimer({ handlerChangeHours, handlerChangeMinutes,  timerHours, timerMinutes }: InputTimerProps) {
  return (
    <InputTimerWrapper>
      <Input 
        type="text" 
        placeholder="00" 
        value={timerHours} 
        onChange={e => handlerChangeHours(Number(e.target.value))} 
      />
      <p>h</p>
      <span>:</span>
      <Input 
        type="text" 
        placeholder="00"
        min="0" 
        max="60" 
        value={timerMinutes} 
        onChange={e => handlerChangeMinutes(Number(e.target.value))}
        />
      <p>m</p>
    </InputTimerWrapper>
  )
}