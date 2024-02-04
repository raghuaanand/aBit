import React from 'react';
import { headerImg } from '../assets';

function Header() {
  return (
    <div className=''>
      <img src={headerImg} alt='production image' className='h-[400px] w-full bg-center bg-cover'/>

      <div className='bg-[#292828] h-[96px] overflow-x-auto whitespace-nowrap flex items-center'>
        <p className='text-white font-handwriting text-[20px] pl-[-39px] inline-block'>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
      </div>
    </div>
  )
}

export default Header
