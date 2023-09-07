import { Input } from "..";
import { InputTimerWrapper } from "./styles";

type InputTimerProps = {
  tempoTimerHours: number;
  tempoTimerMinutes: number;
  handlerChangeHours: (value: React.SetStateAction<number>) => void
  handlerChangeMinutes: (value: React.SetStateAction<number>) => void
}

export default function InputTimer({ handlerChangeHours, handlerChangeMinutes,  tempoTimerHours, tempoTimerMinutes }: InputTimerProps) {
  return (
    <InputTimerWrapper>
      <Input 
        type="text" 
        placeholder="00" 
        value={tempoTimerHours} 
        onChange={e => handlerChangeHours(Number(e.target.value))} 
      />
      <p>h</p>
      <span>:</span>
      <Input 
        type="text" 
        placeholder="00"
        min="0" 
        max="60" 
        value={tempoTimerMinutes} 
        onChange={e => handlerChangeMinutes(Number(e.target.value))}
        />
      <p>m</p>
    </InputTimerWrapper>
  )
}