import React from 'react';
import { IoMdAdd } from "react-icons/io";

const NewRelease = () => {
  return (
    <div className='h-[312px] w-[283.64px] rounded-3xl bg-[#ededed] flex flex-col items-center justify-center ml-[87px] mt-28 relative'>

      <IoMdAdd className='text-[#959595] h-[32px] w-[32px] '/>
      <p className='text-[#A0A0A0] text-[14px] text-center px-8 absolute bottom-10'>You haven’t uploaded any videos with aBit yet. Add now!</p>

    </div>
  )
}

export default NewRelease
