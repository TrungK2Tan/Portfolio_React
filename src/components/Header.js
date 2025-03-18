import React from 'react';
import Logo from '../assets/logo.svg'
const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
            <img src={Logo} alt='Logo' style={{ width: '112px', height: '48px', objectFit: 'contain' }} />
          </a>
         {/* button */}
         <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
  )
};

export default Header;
