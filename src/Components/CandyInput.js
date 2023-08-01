import React from 'react'

const CandyInput = () => {
  return (
    <div>
        <label> Candy Name</label>
        <input type="text" placeholder="Candy Name" />
        <label htmlFor="">Description</label>
        <input type="text" placeholder="Description" />
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Price" />
        <button type="submit">Add Candy</button>

    </div>
  )
}

export default CandyInput