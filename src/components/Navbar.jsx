import React from 'react';
import 'typeface-raleway';
import { IoWallet } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = () => {
  return (
    <div className='h-[110px] bg-white w-screen flex items-center justify-between  pl-[123px] pr-[84px] border-b-2'>

      <h1 className='text-[#292D32] font-bold text-[24px] font-sans'>aBit</h1>

      <div className='flex items-center gap-[10px] '>

        <button className='w-[139px] h-[39px] text-[#764cc2] border-[2px] border-[#764cc2] rounded-full text-[12px] font-bold font-sans'>Share a new video</button>

        <IoWallet className='text-gray-500 opacity-[32%] w-[28px] h-[28px] '/>

        <IoNotifications className='text-gray-500 opacity-[32%] w-[36px] h-[28px] '/>

        <img src='src/assets/profile_image.jpg' alt='profile picture' className='w-[31px] h-[32px] rounded-full border-black border-[1px] '/>

        <IoIosArrowDown className='text-gray-500 h-[24px] w-[24px] opacity-[40%]'/>
      </div>

    </div>
  )
}

export default Navbar
