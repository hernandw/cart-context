import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const CartTotal = () => {
    
    const {cart} = useContext(MyContext)
    const total = cart.reduce((acc, el)=>acc + el.price, 0)
  return (
    <div className='cartTotal'>
      <h3>total a pagar: {total}</h3>
    </div>
  )
}

export default CartTotal
