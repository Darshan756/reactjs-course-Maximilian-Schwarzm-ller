import React, { useContext } from 'react'
import Modal from './UI/Modal.jsx'
import CartContext from '../../Store/CartContext.jsx'
import { currencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx'
import UserProgressContext from '../../Store/UserProgressContext.jsx'
export default function  Cart(){
  const cartCtx = useContext(CartContext)
  const UserProgressCtx  = useContext(UserProgressContext)

  const cartItemTotalPrice = cartCtx.items.reduce((totalPrice,item) => totalPrice + item.quantity * item.price,0)
  function handleHideCart(){{
    UserProgressCtx.hideCart()
  }}
    return (
    <Modal  className='cart' open={UserProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                   <li key={item.id}>{item.name} - {item.quantity}</li>
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartItemTotalPrice)}</p>
            <p className='modal-actions'>
              <Button textOnly onClick={handleHideCart}>Close</Button>
              <Button >Got to Checkout</Button>
            </p>
    </Modal>
  )
}

