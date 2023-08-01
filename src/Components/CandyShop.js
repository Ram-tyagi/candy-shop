import React from 'react'
import Card from './Card'
import './CandyShop.css'


    const candies = [
        {id:'m1', name: 'Chewing Gum', description: 'A gum that you chew', price: 2.99},
        {id:'m2',  name: 'Pez', description: 'A pressed candy', price: 1.99},
        {id:'m3', name: 'Marshmallow', description: 'A squishy candy', price: 0.99},
        {id:'m4',  name: 'Eclair', description: 'A chocolatey candy', price: 3.99}
    ]

    const CandyShop = () => {
        const available= candies.map((candy) => <ul>{candy.name} {candy.description} {candy.price} 
        <button type="submit">Buy 1</button>
                       <button type="submit">Buy 2</button>
                       <button type="submit">Buy 5</button>
         </ul>)
            return (
                <section className='meals'>
                <Card>
                    <ul>
                       {available}
                       
                    </ul>
                </Card>
                </section>
            
        )
    }


export default CandyShop