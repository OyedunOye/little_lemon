import React from 'react'

const OnlineMenu = () => {
  let menuList=[
    {
      dish:'Greek Salad',
      pix:'/images/greekSalad.jpg',
      price: '$12.89',
      description: 'The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      order:'Order a delivery'
    }
    ,
    {
      dish:'Bruchetta',
      pix:'/images/bruchetta.jpg',
      price: '$9.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      order:'Order a delivery'
    },

    {
      dish:'Lemon Desert',
      pix:'/images/lemon dessert.jpg',
      price: '$6.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is asauthentic as can be imagined.',
      order:'Order a delivery'
    }
  ]

  return (
      <div className='menucardcontent' id='menucardcontent' style={{display:'flex', flexDirection:'row', margin:'2.5rem 0rem 2.5rem 0rem', alignContent:'space-between'}}>
      {menuList.map(({dish, pix, price, description})=>(
        <div className='innermenucard' style={{display:'flex', flexDirection:'column'}}>
        <img src={pix} key={dish} alt={dish} width= '250rem' height='150rem' />
        <div style={{display:'flex', flexDirection:'row', alignContent:'space-evenly',alignItems:'center'}}>
          <h4 key={dish} style={{margin: '0.5rem 5rem 0.5rem 0rem'}}>{dish}</h4>
          <p key={dish}>{price}</p>
        </div>
        <p key={dish} >{description}</p>
        <a href='#order'>Order a delivery</a>
        </div>
      ))}
      
      </div>
  )
}

export default OnlineMenu;