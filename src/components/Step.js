import './Step.css'
import { MdFormatListBulleted, MdErrorOutline } from 'react-icons/md'
 
const Step = ({ step, selectedStep, hasSeparator, handleClick}) => {
  return (
    <span key={step.stepNumber}>
      <div  className={selectedStep === step.stepNumber ? 'stepBox selectedStepBox' : 'stepBox'} onClick={() => handleClick(step.stepNumber)}>
        {step.icon}
        <p className='stepNumber'>{step.stepNumber}</p>
        <p className='stepName'>{step.name}</p>
        {step.listAmount && (
          <div className='stepList'>
            <MdFormatListBulleted className='stepListIcon' />
            <p className='stepListNumber'>{step.listAmount}</p>
          </div>
        )}
        {step.hasError && (
          <MdErrorOutline className='errorIcon' />
        )}
      </div>
      {hasSeparator && (
        <hr className='separator' />
      )}
    </span>
  )
}

export default Step
