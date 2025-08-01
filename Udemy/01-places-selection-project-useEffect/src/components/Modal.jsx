import { forwardRef, useImperativeHandle, useRef , useEffect} from 'react';
import { createPortal } from 'react-dom';

function Modal({onClose,open , children }) {
    const dialog = useRef();

  useEffect(
   () => {
  if(open){
  dialog.current.showModal();
 }else{
  dialog.current.close();
 }
   },[open])


  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >
      { open ? children : ''}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
