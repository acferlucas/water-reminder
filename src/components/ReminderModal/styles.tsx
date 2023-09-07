import { styled } from "../../styles";


export const ModalBox = styled('div', {
  width: '18.6875rem',
  height: '15.875rem',
  background: '$gray-400',
  borderRadius: '1.4375rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  textAlign: 'center',

  h1: {
    marginTop: '1rem',
    color: '$blue',
    fontSize: '$md',
    fontWeight: '$semiBold',
    fontFamily: '$default',

    width: '12.25rem',
    height: '3.625rem'
  },

  button: {
    marginLeft: 'auto',
  },
  
  img: {
    marginTop: '2rem',
    width: '4rem',
    height: '5rem'
  },
})

export const ButtonModal = styled('button', {
  width: '2rem',
  height: '2rem',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '$gray-200',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: '$gray-300',
    cursor: 'pointer',
  },

  svg: {
    color: '$gray-100',
    width: '1.5rem',
    height: '1.5rem',
  }
})