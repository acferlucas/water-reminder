import iconImg from './assets/icon.svg'
import acenoImg from './assets/emoji.svg'
import { globalCss, styled } from './styles'
import { ActionCard, Button, InputTimer, SliderInput, ReminderModal } from './components';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  const [openModal, setOpenModal] = useState(false)
  const [goal, setGoal] = useState(0)
  const [quantityPerTime, setQuantityPerTime] = useState(0)
  const [quantityPerTimeConsumed, setQuantityPerTimeConsumed] = useState(0);
  
  const [tempoTimerHours, setTempoTimerHours] = useState(0);
  const [tempoTimerMinutes, setTempoTimerMinutes] = useState(0);

  function clearApplication() {
    setGoal(0)
    setQuantityPerTime(0)
    setQuantityPerTimeConsumed(0)
    setTempoTimerHours(0)
    setTempoTimerMinutes(0)
  }
  
  function handlerStart() {
    alert('job is running...')
    const totalTimeInMinutes = tempoTimerHours * 60 + tempoTimerMinutes;
  
    try {
      if (!isNaN(goal) && !isNaN(quantityPerTime) && !isNaN(totalTimeInMinutes)) {
        if (quantityPerTime > goal) {
          throw new Error('quantityPerTime cannot be greater than goal');
        }
  
        if (totalTimeInMinutes <= 0 || goal <= 0 || quantityPerTime <= 0) {
          throw new Error('Inputs must be greater than 0 ');
        }

        let quantityPerTimeConsumedCount = 0;
  
        // Cria um timer para notificar o usuário a cada totalTimeInMinutes minutos.
        const timerInterval = setInterval(() => {
          if (quantityPerTimeConsumedCount < goal) {
            setQuantityPerTimeConsumed((prevQuantity) => prevQuantity + quantityPerTime);
            
            setOpenModal(true)
            quantityPerTimeConsumedCount += quantityPerTime;
          } else {
            clearInterval(timerInterval);
            clearApplication() 
            alert('Meta atingida! Não é mais necessário beber água.');
          }
        }, 1000); //totalTimeInMinutes * 60000
  
      } else {
        throw new Error('Some parameters are required and are not provided');
      }
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
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
              text='Quantidade por timer'
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
      {
        openModal && (
          <ReminderModal.layout>
            <ReminderModal.button handlerButtonClicked={() => setOpenModal(!openModal)} />
            <ReminderModal.image type='water' />
            <ReminderModal.text text='lembrete para beber água' />
          </ReminderModal.layout>
        )
      }
    </main>
  )
}

export default App
