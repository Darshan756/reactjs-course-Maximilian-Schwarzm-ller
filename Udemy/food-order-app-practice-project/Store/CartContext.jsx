import { createContext, useEffect,useReducer } from "react";
import { useState } from "react";
const CartContext = createContext({
    items:[],
    addItem:(item) => {},
    removeItem:(id) => {},
    clearCart:() => {}
})
function cartReducer(state, action){

    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
      
     const  updatedItems = [...state.items];
       if(existingCartItemIndex > -1){
        const existingItem = state.items[existingCartItemIndex]
        const updatedItem = {
          ...existingItem,
          quantity:existingItem.quantity+1

        };
       updatedItems[existingCartItemIndex] = updatedItem
    }else{
        updatedItems.push({...action.item,quantity:1})
       }
       return {...state, items:updatedItems };
    }
      
    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const existingCartItem = state.items[existingCartItemIndex]

          const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1){
        updatedItems.splice(existingCartItemIndex,1);
    
       }else{
        const updatedItem = {
            ...existingCartItem,
            quantity:existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
    }

   return {...state,items:updatedItems}
    }

    if(action.type === 'CLEAR_CART'){
      return {...state,items:[]}
    }
    return state
}

export function CartContextProvider({children}){
  const [cartState,dispcthCartAction] = useReducer(cartReducer,{items:[]})
 
 
  function addItem(item){
    dispcthCartAction({type:'ADD_ITEM',item})
  }
  function removeItem(id){
    dispcthCartAction({type:'REMOVE_ITEM',id})
  }
  function clearCart(){
    dispcthCartAction({type:'CLEAR_CART'})
  }
   const cartConetxt ={
    items: cartState.items,
    addItem,
    removeItem,
    clearCart
  }
  console.log(cartConetxt)
  return <CartContext.Provider value={cartConetxt}>{children}</CartContext.Provider>
}
export default CartContext;

