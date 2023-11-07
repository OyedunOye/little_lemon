import React from 'react'

const Founders = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', alignContent:'center'}}>
        <div className='founder' id='founder' style={{display:'flex', flexDirection:'column', width:'20rem'}}>
            <h1>
                Little Lemon
            </h1>
            <h3 style={{backgroundColor:'white'}}>Chicago</h3>
            <p>
            Meet the owners: Marie and Adrian, who are highly inspired to bring you the best of the Middle East cuisines. We have been passionate about cooking since childhood and you can only expect the best. 
    Bon appetite!
            </p>
        </div>
        <div>
            <img src='/images/Mario and Adrian A.jpg' alt='Adrian and Mario' width='300' height='416' style={{margin:'2rem'}}/>
        </div>
        <div>
            <img src='/images/Mario and Adrian b.jpg' alt='Adrian and Mario-the founders' width='300' height='416' tyle={{margin:'2rem'}}/>
        </div>
    </div>
  )
}

export default Founders