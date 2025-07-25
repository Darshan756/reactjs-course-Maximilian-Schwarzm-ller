import { useEffect, useRef,forwardRef } from 'react'
import { createPortal } from 'react-dom'
const Modal = forwardRef(({children,open,className},ref) => {
    const dialog = useRef()
useEffect(() => {
  const modal = dialog.current;

  if (open) {
    modal.showModal();
  } else {
    modal.close(); // close it only when `open` becomes false
  }
}, [open]);

  
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById('modal')
  )
}
)

export default Modal