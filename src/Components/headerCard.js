import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import './HeaderCard.css'
const headerCard = (props) => {
  return (
    <>
    <header className='header'>
      <h3>Candy Shop</h3>
       <HeaderCartButton />
       </header>
    </>
  )
}

export default headerCard;