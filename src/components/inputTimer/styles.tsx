import { styled } from "../../styles";

export const InputTimerWrapper = styled('div', {
  width: '12.3125rem',
  height: '4rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  p: {
    color: '$gray-200',
    fontSize: '$sm',
    fontWeight: '$medium'
  },
  span: {
    color: '$gray-100',
    fontSize: '2.2rem',
    fontWeight: '$regular',
  }
})
