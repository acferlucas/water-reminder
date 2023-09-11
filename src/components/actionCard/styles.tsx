import { styled } from "../../styles";

export const Card = styled('div', {
  width: '13rem',
  height: '100%',
  backgroundColor: '$blue',
  color: '$gray-500',
  fontFamily: '$default',
  borderRadius: '1.25rem',
  overflow: 'hidden',
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  textAlign: 'center',

  p: {
    height: '30px',
    fontSize: '$sm-m',
    fontWeight: 'bold'
  },

  span: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.5rem',
    height: '2.8125rem',
    width: '7,75rem',

    h1: {
      fontSize: '$sm-m',
      fontWeight: 'semiBold'
    },
    
    p: {
      fontSize: '$sm',
      fontWeight: 'medium'
    },
    
    
  },
  
})

export const CardImage = styled('img',{
  marginTop: '2.5rem',
  width: '8.095',
  height: '10.45125rem'
})