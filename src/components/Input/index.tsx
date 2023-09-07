import { styled } from "../../styles";

export const Input = styled('input', {
  height: '100%',
  width: '4rem',
  color: '$gray-100',
  background: '$gray-400',
  border: 'none',
  borderRadius: '0.625rem',

  outline: 'none',

  fontSize: '$bg',
  fontWeight: '$medium',
  fontFamily: '$default',

  textAlign: 'center',

  '&:focus' : {
    outline: 'solid $blue'
  }

})