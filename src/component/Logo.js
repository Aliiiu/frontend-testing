import React from 'react';
import './Logo.css';
import lendsqr from '../Asset/welcomePage/lendsqr.png';
import union from '../Asset/welcomePage/Union.png';

const Logo = () => {
  return (
      <div className='unionLogo'>
          <img src={union} alt="company's logo" className='union' />
          <img src={lendsqr} alt="company's name" className='logo' />
      </div>
  )
}

export default Logo