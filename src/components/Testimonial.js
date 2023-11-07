import React from 'react';

let customers = [
  {
    person:'James',
    rating: '5 stars',
    pix: '/images/James.png',
    review: 'This is the best restaurant I’ve visited in a long while! The staff are amazing!'
  },
  {
    person:'Sarah',
    rating: '5 stars',
    pix: '/images/Sarah.jpg',
    review: 'Simply delicious, I highly recommend this restaurant!'
  },
  {
    person:'Matt',
    rating: '5 stars',
    pix: '/images/Richard.jpg',
    review: 'The restaurant is situated in a  really cool environment, ideal for weekend relaxation!'
  },
  {
    person:'Sofia',
    rating: '4 stars',
    pix: '/images/Sofia.jpg',
    review: 'Services are generally okay, took so long to have my food served due to the huge crowd.'
  }
]

const Testimonial = () => {
  return (
    <div style={{backgroundColor:'#495E57', display:'flex', flexDirection: 'column', alignContent:'center'}}>
      <h2 style={{alignSelf:'center', backgroundColor:'#495e57', marginTop:'10rem'}}>Testimonials</h2>

      <div style={{backgroundColor:'#495E57', display:'flex', flexDirection: 'row', alignSelf:'center', margin:'5rem 10rem 10rem 10rem'}}>
        
        {customers.map(({person, rating, pix,review})=>(
          <div style={{display:'flex', width:'20rem',height:'30rem', flexDirection: 'column',margin:'0rem 2rem 0rem 0rem',flexWrap:'wrap', borderRadius: '16px', alignContent:'space-between'}}>
            <h4 key={person}>{rating}</h4>
            <div style={{display:'flex'}}>
              <img key={person} alt={person} src={pix} width='50rem' height='60rem'/>
              <p key={person}>{person}</p>
            </div>
            <p key={person}>{review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial;