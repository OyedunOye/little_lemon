import React from 'react'

const Home = () => {
  return (
    <div className='home' id='home' >
        <header className='little-lemon'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type='button' >Reserve a table</button>
        </header>
        <img src='/images/restauranfood.jpg' alt='Restaurant food' width='300' height='416'style={{  marginRight: '10rem'}} />
    </div>
  )
}

export default Home;