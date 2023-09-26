import { globalCss, styled } from ".";

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0},
  main: { 
    background: '#000000',
    height: '100vh',
    width: '100%',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Wrapper = styled('div', {
  width: '39.375rem',
  height: '30.5625rem',

  fontFamily: '$default',

  '& > div': {
    width: '39.375rem',
    height: '21.875rem',
    marginTop: '4.6rem',

    display: 'flex',
    gap: '3rem',
    
    section: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
            
      gap: '2rem',

      '& > div:nth-child(3)': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      
      button: {
        width: '100%',
        marginTop: 'auto',
      }

    },


  }

})
