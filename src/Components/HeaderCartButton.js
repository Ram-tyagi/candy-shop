import React from 'react'
import CartIcon from './CartIcon'
import './HeaderCartButton.css'

const HeaderCartButton = () => {
  return (
    <div>
        <button className='button'>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className='badge'>
            3
        </span>
        </button>
    </div>
    
  )
}

export default HeaderCartButton