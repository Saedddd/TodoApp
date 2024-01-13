
import { ModalProps } from './types'

  export default function Modal({modalOpen, onClose, children}: ModalProps){
    
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box">

          {children}

          <div className="modal-action">
            <label onClick={() => onClose()} className="btn">Close!</label>
          </div>

      </div>
  </div>
  )
}

