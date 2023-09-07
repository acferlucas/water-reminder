import { Slider } from "..";
import { styled } from "../../styles";

const SliderInputWrapper = styled('div', {
  label: {
    color: '$blue',
    fontSize: '$sm',
    fontWeight: 'bold',

    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      color: '$gray-200',
      fontWeight: 'medium',
    },
  }
})

type SliderInputProps = {
  text: string;
  goal: number;
  handlerChangeGoal: (goal: React.SetStateAction<number>) => void
}

export default function SliderInput({ text,goal, handlerChangeGoal }: SliderInputProps) {
  return (
    <SliderInputWrapper>
      <label htmlFor="slider">
        {text}
        <span>{goal}ml</span>
      </label>
      <Slider 
      id="slider"
      type="range"
      min="0"
      max="10000"
      value={goal}
      onChange={e => handlerChangeGoal(parseInt(e.target.value, 10))}
      step={50}

      />
    </SliderInputWrapper>
  )
}