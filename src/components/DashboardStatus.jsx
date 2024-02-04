import React from 'react';
import {Stats} from './index.js'
import { dashboardStats } from '../constants/index.js';

const DashboardStatus = () => {
  return (
    <div className='flex justify-center'>

        <div className='flex h-[75px] w-[1240px] mt-[122px] items-center justify-between'>
        
            <div>
                <p className='text-[28px] font-normal '>Release</p>
                <p className='font-handwriting font-normal text-[#565656] text-[16px]'>Videos that you upload in collaboration with aBit appear here.</p>
            </div>

            <div className='flex gap-20'>
                {dashboardStats.map((props, id) => (
                    <div key={props.id} className='border-l-[1px] border-gray-400 pl-6 flex-row space-y-1'>
                        <p className='font-bold text-[16px] '>{props.number} </p>
                        <p className='font-normal text-[14px] text-[#696969]'>{props.paraOne} </p>
                        <p className='font-normal text-[14px] text-[#696969]'>{props.paraTwo} </p>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default DashboardStatus
