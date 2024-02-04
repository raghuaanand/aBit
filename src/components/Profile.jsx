import React from 'react'
import { profileImg } from '../assets'

const Profile = () => {
  return (
    <div className='w-[571px] h-[234px] flex bg-gray-100 rounded-3xl absolute top-[436px] left-[83px]'>
        <div>
           <img src={profileImg} alt='profile image' className='w-[234px] h-[234px] rounded-l-3xl ' />
        </div>

        <div className='ml-10 my-7 space-y-5'>

          <div className='flex items-center text-[#696969] justify-between'>
            <p className='text-[24px] font-bold '>DAN MACE</p>
            <p className='text-[14px] font-normal '>/jhons_films/</p>
          </div>

          <div className='w-[259px] '>
            <p className='text-[14px] font-bold '>Bio</p>
            <p className='text-[14px] font-normal '>Simply a film fan creating original content for YouTube. Let’s Collaborate</p>
          </div>

          <div className='flex border-[1px] rounded border-black'>
            <p className='w-[129px] text-center text-[14px] font-normalx '>Creator</p>
            <div className='w-[128px] bg-black opacity-65'>p</div>
          </div>
        </div>
      
    </div>
  )
}

export default Profile
