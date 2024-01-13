
import { ModalProps } from './types'

  export default function Modal({modalOpen, onClose, children}: ModalProps){
    
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box">
        
            <form method="dialog">
              <button onClick={() => onClose()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

          {children}


      </div>
  </div>
  )
}

