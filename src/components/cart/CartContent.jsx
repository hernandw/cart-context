import React, { useContext } from 'react'
import CartElement from './CartElement'
import './Cart.css'
import CartTotal from './CartTotal'
import { MyContext } from '../context/MyContext'

const CartContent = () => {
  const {cart } = useContext(MyContext)
  return (
    <div>
      {cart.length >0 ? (<><CartElement />
      <hr />
      <CartTotal /></> ): (<><h2 className='cart-message-center'>Tu carrrito está vacio</h2></>)}
    </div>
  )
}

export default CartContent
