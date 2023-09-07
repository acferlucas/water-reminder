import waterImg from '../../assets/agua.svg'
import exerciseImg from '../../assets/alongar.svg'

type ReminderModalImageProps = {
  type: 'water' | 'exercise'
}

const imageSrc = {
  water: waterImg,
  exercise: exerciseImg
}

export function ReminderModalImage({ type } : ReminderModalImageProps) {
  return <img src={imageSrc[type]} alt="water" />
}