import React from 'react';


const ReleasedStats = () => {
  return (
    <div className='absolute top-60 left-8 flex h-[52.36px] w-[209px] justify-between bg-gray-600 rounded-2xl px-4 items-center'>
      <div>
        <p className='text-[12px] font-medium text-white '>Shares</p>
        <p className='text-[14px] font-bold text-white '>317</p>
      </div>
      <div>
        <p className='text-[12px] font-medium text-white '>Offered</p>
        <p className='text-[14px] font-bold text-white '>77%</p>
      </div>
      <div>
        <p className='text-[12px] font-medium text-white '>Raised</p>
        <p className='text-[14px] font-bold text-white '>$9150</p>
      </div>
    </div>
  )
}

export default ReleasedStats
