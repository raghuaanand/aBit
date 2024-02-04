import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[1169px] justify-between ml-[135px] mt-24 mb-20'>
      <div>
        <p className='text-[40px] font-bold '>aBit</p>
        <p className='text-[20px] font-normal w-[313px] '>Changing the way in which creators and fans interact.</p>
      </div>

      <div className='border-l-2 flex-row space-y-7 pl-12'>

        <p className='text-[14px] font-bold text-[#262626] '>Home</p>
        <p className='text-[14px] font-bold text-[#262626] '>Are you a creator ?</p>
        <p className='text-[14px] font-bold text-[#262626] '>Support</p>
      </div>
    </div>
  )
}

export default Footer
