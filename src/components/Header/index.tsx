import iconImg from '../../assets/icon.svg'
import acenoImg from '../../assets/emoji.svg'
import { styled } from "../../styles"

const HeaderWrapper = styled('header', {
  height: '3.9375rem',
  width: '12.1875rem',
  display: 'flex',
  gap: '0.5rem',

  fontSize: '$md',
  fontWeight: '$light',
  color: '$gray-100',

  img: {
    height: '4rem',
  },

  span: {
    width: '7.625rem',

    p: {
      img: {
        marginLeft: '10px',
        height: '1.5625rem',
      }
    }
  },
  
})

export default function Header() {
  return (
      <HeaderWrapper>
      <img src={iconImg} alt="avatar" />
      <span>
        <p>
          Boa tarde,
          <img src={acenoImg} alt="aceno" />
        </p>
      </span>
    </HeaderWrapper>
  )
}