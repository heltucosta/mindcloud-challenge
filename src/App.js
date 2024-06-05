import { useState } from 'react'
import './App.css'
import Step from './components/Step'
import { MdTransform, MdPersonPin } from 'react-icons/md'

const steps = [
  {
    name: 'Merge Employess with Demographics',
    stepNumber: 11,
    icon: <MdTransform className='stepIcon' />,
    listAmount: 100
  },
  {
    name: 'Update User',
    stepNumber: 12,
    icon: <MdPersonPin className='stepIcon' />,
    hasError: true
  }
]

function App() {
  const [selectedStep, setSelectedStep] = useState(null) 

  const handleStepClick = stepNumber => {
    setSelectedStep(stepNumber)
  }

  return (
    <div className='stepperBox'>
      {steps.map((step, idx) => (
        <Step
          step={step}
          selectedStep={selectedStep}
          hasSeparator={idx < steps.length - 1}
          handleClick={handleStepClick}
        />
      ))}
      <div className='guideline' style={{height: ((steps.length - 1)*120) + 'px'}} />
    </div>
  );
}

export default App;
