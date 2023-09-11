import WaterImg from '../../assets/agua.svg'
import AlongarImg from '../../assets/alongar.svg'
import { Card, CardImage } from './styles'

const imageSrc = {
  water: WaterImg,
  exercise: AlongarImg
}

type ActionCardProps = {
  goal: number
  quantityPerTimeConsumed: number
  cardImage: 'water'| 'exercise'
}


export default function ActionCard({ goal, cardImage, quantityPerTimeConsumed }:ActionCardProps) {
  const percentageAchieved = (quantityPerTimeConsumed / goal) * 100;
  return (
    <Card>
      <p>{!isNaN(percentageAchieved) ? `${percentageAchieved.toFixed(1)}%` : ''}</p>
      <CardImage src={imageSrc[cardImage]} />
      <span>
        <h1>Beber água</h1>
        <p>Meta: {goal / 1000}L</p>
      </span>
    </Card>
  )
}