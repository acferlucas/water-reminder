import { createStitches } from '@stitches/react'

export const { 
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config } = createStitches({
    theme: {
      colors: {
        blue: '#7FC4ED',
        'blue-dark': '#659ABA',
        'gray-100': '#FBF9FE',
        'gray-200': '#322F40',
        'gray-300': '#282533',
        'gray-400': '#1D1B26',
        'gray-500': '#0F0E13',

      },
      fontWeights: {
        light: '300',
        regular: '400',
        semiBold: '600',
        medium: '500',
      },
      fontSizes: {
        sm: '16px',
        'sm-m': '20px',
        md: '24px',
        bg: '32px'
      },
      fonts: {
        default: 'Poppins, sans-serif',
      }
    },
  });