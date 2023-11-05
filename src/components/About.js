import React from 'react'

const About = () => {
  return (
    <div className='home' id='home' style={{backgroundColor:'495E57'}}>
        <header className='little-lemon'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type='button'>Reserve a table</button>
        </header>
        <img src='/images/restauranfood.jpg' alt='Restaurant food' width='300' height='416' />
    </div>
  )
}

export default About;