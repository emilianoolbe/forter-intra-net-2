import React from 'react'
import { NavBarN } from './Nav'

export const Header = () => {
  return (
    <header className='header d-flex align-items-center bg-dark text-light'>
      
      <div className="fs-1 fw-bold ms-4 ">
          FORTER 
      </div>

      <div className='fs-5 d-inline mx-auto'>
        <NavBarN />
      </div>
     
    </header>
  );
};
