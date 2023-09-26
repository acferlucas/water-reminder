import { PropsWithChildren } from 'react'
import WaterImg from '../../assets/agua.svg'
import AlongarImg from '../../assets/alongar.svg'
import { Card, CardImage } from './styles'

const imageSrc = {
  water: WaterImg,
  exercise: AlongarImg
}

const cardDescription = {
  water: 'Beber água',
  exercise: 'Alongar'
}

type ActionCardProps = {
  goal: number
  quantityPerTimeConsumed: number
  cardImage: 'water'| 'exercise'
}


export default function ActionCard({ goal, cardImage, quantityPerTimeConsumed, children }:PropsWithChildren<ActionCardProps>) {
  const percentageAchieved = (quantityPerTimeConsumed / goal) * 100;
  return (
    <Card>
      <p>{!isNaN(percentageAchieved) ? `${percentageAchieved.toFixed(1)}%` : ''}</p>
      <CardImage src={imageSrc[cardImage]} />
      <span>
        <h1>{cardDescription[cardImage]}</h1>
        {children}
      </span>
    </Card>
  )
}