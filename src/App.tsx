import iconImg from './assets/icon.svg'
import acenoImg from './assets/emoji.svg'
import { globalCss, styled } from './styles'
import { ActionCard, Button, InputTimer, Slider, SliderInput } from './components';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const globalStyles = globalCss({
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

const Wrapper = styled('div', {
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

const Header = styled('header', {
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


function App() {
  globalStyles();
  const [goal, setGoal] = useState(0)
  const [quantityPerTime, setQuantityPerTime] = useState(0)
  const [quantityPerTimeConsumed, setQuantityPerTimeConsumed] = useState(0);
  
  const [tempoTimerHours, setTempoTimerHours] = useState(0);
  const [tempoTimerMinutes, setTempoTimerMinutes] = useState(0);

  function handlerStart() {
    console.log('job is running...')
    const totalTimeInMinutes = tempoTimerHours * 60 + tempoTimerMinutes;
  
    try {
      if (!isNaN(goal) && !isNaN(quantityPerTime) && !isNaN(totalTimeInMinutes)) {

      
        const remindersNeeded = Math.ceil(goal / quantityPerTime);
        const timeBetweenRemindersMillis = (totalTimeInMinutes * 60 * 1000) / remindersNeeded;
  
        if(quantityPerTime > goal) {
          throw new Error('quantityPerTime cannot be greater than goal')
        }
  
        if(totalTimeInMinutes <= 0 || goal <= 0 || quantityPerTime <= 0 ) {
          throw new Error('Inputs must be greater than 0 ')
        }

        let remindersCount = 0
    
        const timer = setInterval(() => {
            setQuantityPerTimeConsumed((prevQuantity) => prevQuantity + quantityPerTime);
            remindersCount++;

            console.log(remindersCount)
  
            if (remindersCount >= remindersNeeded) {
              clearInterval(timer);
              setGoal(0),
              setQuantityPerTime(0),
              setTempoTimerHours(0)
              setTempoTimerMinutes(0)

            } else {
              alert('Lembre-se de beber água!'); 
            }
          
         
        }, timeBetweenRemindersMillis);
    
        return () => {
          clearInterval(timer);
        };
      }

      throw new Error('some parameters are required and cannot be provided')
    } catch(err) {
      if( err instanceof Error) {
        alert(err.message)
      }
    }
  }

  return (
    <main>
      <Wrapper>
        <Header>
          <img src={iconImg} alt="avatar" />
          <span>
            <p>
              Boa tarde, <strong>Biro {quantityPerTimeConsumed}</strong>
              <img src={acenoImg} alt="aceno" />
            </p>
          </span>
        </Header>
        <div>
          <ActionCard goal={goal} />
          <section>
            
            <SliderInput 
              text='Meta diária'
              goal={goal}
              handlerChangeGoal={setGoal} 
            />

            <SliderInput 
              text='QuantityPerTime por timer'
              goal={quantityPerTime}
              handlerChangeGoal={setQuantityPerTime} 
            />
            <InputTimer 
              tempoTimerHours={tempoTimerHours} 
              tempoTimerMinutes={tempoTimerMinutes} 
              handlerChangeHours={setTempoTimerHours}
              handlerChangeMinutes={setTempoTimerMinutes} 
            />

            <Button onClick={handlerStart} >
              começar 
              <ChevronRight />
            </Button>

          </section>
        </div>
      </Wrapper>
    </main>
  )
}

export default App
