import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.png"
import NewLetterBox from '../component/NewLetterBox'
function Contact() {
  return (
    <div className='md:w-[99vw] min-h-[100vh]  flex items-center justify-center flex-col bg-gradient-to-l from-[#110c14] to-[#101f23] flex-col gap-[50px] pt-[80px]'>
      <Title text1={"CONTACT"} text2={"US"}/>
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img src={contact} alt="" className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex flex-col gap-10 items-start justify-center gap-[20px] lg:mt-[0px] sm:pt-[10px]'>
          <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px] mt-6'>Our Store</p>
          <div className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>
          <div className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>Tel: +91-9876543210</p>
            <p>Email: admin@onecart.com</p>
          </div>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Careers at OneCart</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>Learn more about our teams and job openings</p>
          <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
