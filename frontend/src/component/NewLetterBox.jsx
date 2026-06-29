import React from 'react'

function NewLetterBox() {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-[100%] h-[40vh] bg-gradient-to-l from-[#110c14] to-[#101f23] flex items-center justify-start gap-[10px] flex-col pb-[200px]'>
      <p className='md:text-[30px] text-[20px] text-[#8ee2d9] font-semibold px-[20px]'>Subscribe now & get 20% off</p>
      <p className='md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]'>Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.</p>
      <form onSubmit={handleSubmit} action="" className='w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]'>
        <input required type="text" placeholder='Enter Your Email' className='placeholder:text-[black] bg-slate-300 w-[600px] max-w-[60%] h-[40px] px-[20px] rounded-lg shadow-sm shadow-black' />
        <button type='submit' className='text-[15px] md:text-[16px] px-[10px] md:px-[30px] bg-zinc-700 text-white flex items-center justify-center gap-[20px] border-[1px] border-zinc-600 rounded-lg shadow-sm shadow-black h-[40px] cursor-pointer'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewLetterBox
