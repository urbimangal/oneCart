import React from 'react'
import Title from './Title'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { RiExchangeFundsLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
function OurPolicy() {
  return (
    <div className='w-full flex items-center justify-start flex-col bg-gradient-to-l from-[#110c14] to-[#101f23] gap-[50px] pb-[80px]'>
      <div className='h-[8%] w-[100%] text-center mt-[70px]'>
        <Title text1={"OUR"} text2={"POLICY"} /> 
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Customer-Friendly Policies - Committed to Your Satisfaction and Safety</p>
      </div>
      <div className='w-full md:min-h-[50%] h-[30%] flex items-start justify-center flex-wrap md:flex-row lg:gap-[50px] gap-[80px] md:mt-8'>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] md:w-[30%]'>
            <RiExchangeFundsLine className='text-[40px] md:text-[60px] text-blue-200' />
            <p className='font-semibold md:text-[25px] text-[19px] text-blue-100 '>Easy Exchange Policy</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Exchange Made Easy - Quick, Simple, and Customer-Friendly Process</p>
        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] md:w-[30%]'>
            <TbRosetteDiscountCheckFilled className='text-[40px] md:text-[60px] text-blue-200' />
            <p className='font-semibold md:text-[25px] text-[19px] text-blue-100 '>7 Days Return Policy</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Shop with Confidence - 7 Days Easy Return Guarantee</p>
        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] md:w-[30%]'>
            <BiSupport className='text-[40px] md:text-[60px] text-blue-200' />
            <p className='font-semibold md:text-[25px] text-[19px] text-blue-100 '>Best Customer Support</p>
            <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Trusted Customer Support - Your Satisfaction Is Our Priority</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
