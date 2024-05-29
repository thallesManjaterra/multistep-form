import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai'
import './Steps.css'
import { FiSend } from 'react-icons/fi'

export const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  )
}