import React from 'react';
import Nav from './Nav.js';
import Header from './Header.js';

const Menubar = () => {
  return (
    <div className='menubar'>
        <Header/>
        <Nav />
    </div>
  )
}

export default Menubar;