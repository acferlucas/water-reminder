import { styled } from "../../styles";

export const Button = styled('button', {
  height: '3.5rem',
  width: '20rem',
  backgroundColor: '$blue',
  color: '$gray-500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  border: 'none',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '$blue-dark',
    cursor: 'pointer',
  },
  svg: {
    width: '24px',
    height: '24px'
  }
})