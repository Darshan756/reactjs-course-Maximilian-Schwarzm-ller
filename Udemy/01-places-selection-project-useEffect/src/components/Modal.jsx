import { forwardRef, useImperativeHandle, useRef , useEffect} from 'react';
import { createPortal } from 'react-dom';

function Modal({open , children }) {
    const dialog = useRef();

  useEffect(
   () => {
  if(open){
  dialog.current.showModal();
 }else{
  dialog.current.close();
 }
   },[open])

/*   useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });
 */
  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
