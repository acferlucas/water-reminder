import { useState } from 'react'
import WaterImg from '../../assets/agua.svg'
import AlongarImg from '../../assets/alongar.svg'
import { Card, CardImage } from './styles'

const imageSrc = {
  water: WaterImg,
  exercise: AlongarImg
}

type ActionCardProps = {
  goal: number
}


export default function ActionCard({ goal }:ActionCardProps) {
  const [cardImage, setCardImage] = useState<'water'| 'exercise'>('water')
  return (
    <Card>
     <p>80%</p>
      <CardImage src={imageSrc[cardImage]} />
      <span>
        <h1>Beber água</h1>
        <p>Meta: {goal / 1000}L</p>
      </span>
    </Card>
  )
}