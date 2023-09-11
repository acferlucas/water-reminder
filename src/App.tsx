import { globalCss, styled } from './styles'
import { ActionCard, Button, InputTimer, SliderInput, Header, Modal } from './components';
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

function App() {
  globalStyles();
  
  const [openModal, setOpenModal] = useState(false)
  const [goal, setGoal] = useState(0)
  const [quantityPerTime, setQuantityPerTime] = useState(0)
  const [quantityPerTimeConsumed, setQuantityPerTimeConsumed] = useState(0);
  
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  
  const [isJobRunning, setIsJobRunning] = useState(false);

  function clearApplication() {
    setGoal(0)
    setQuantityPerTime(0)
    setQuantityPerTimeConsumed(0)
    setTimerHours(0)
    setTimerMinutes(0)

    setIsJobRunning(false) 

  }
  
  function handlerStart() {
    
    setIsJobRunning(true)
    const totalTimeInMinutes = timerHours * 60 + timerMinutes;
  
    try {
      if (!isNaN(goal) && !isNaN(quantityPerTime) && !isNaN(totalTimeInMinutes)) {
        if (quantityPerTime > goal) {
          throw new Error('quantityPerTime cannot be greater than goal');
        }
  
        if (totalTimeInMinutes <= 0 || goal <= 0 || quantityPerTime <= 0) {
          throw new Error('Inputs must be greater than 0 ');
        }

        let quantityPerTimeConsumedCount = 0;
  
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
        }, 3000); //totalTimeInMinutes * 60000
  
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
       <Header />
        <div>
          <ActionCard goal={goal} quantityPerTimeConsumed={quantityPerTimeConsumed} cardImage='water'  />
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
              timerHours={timerHours} 
              timerMinutes={timerMinutes} 
              handlerChangeHours={setTimerHours}
              handlerChangeMinutes={setTimerMinutes} 
            />

            <Button onClick={handlerStart} disabled={isJobRunning} >
              começar 
              <ChevronRight />
            </Button>

          </section>
        </div>
      </Wrapper>
      <Modal 
        isOpen={openModal} 
        onClose={() => setOpenModal(!openModal)} 
      />
    </main>
  )
}

export default App
