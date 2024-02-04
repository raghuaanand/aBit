import React from 'react';
import { personImg } from '../assets';
import {ReleasedStats} from './index.js';

const Released = () => {
  return (
    <div className='h-[312px] w-[283.64px] rounded-3xl mt-28 relative'>
      <img src={personImg} alt='person image' className='w-[283.64px] h-[312px] rounded-3xl'/>
      <p className='absolute top-4 font-bold text-[20px] text-[#ffffff] left-4'>The Sound of Slience</p>
      <ReleasedStats />
    </div>
  )
}

export default Released
