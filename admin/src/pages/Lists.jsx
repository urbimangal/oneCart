import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import Nav from '../component/Nav'
import axios from 'axios'
import { AuthDataContext } from '../context/AuthContext'

function Lists() {
  let [list,setList]=useState([])
  let {serverUrl}=useContext(AuthDataContext)
  const fetchList=async()=>{
    try {
      let result=await axios.get(serverUrl+"/api/product/list",{withCredentials:true})
      setList(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  const removeList=async(id)=>{
    try {
      let result=await axios.post(`${serverUrl}/api/product/remove/${id}`,{},{withCredentials:true})
      if(result.data) fetchList()
      else console.log("Failed to remove product")
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[black] to-[#1d3a3a] text-[white] overflow-x-hidden relative'>
      <Nav/>
      <div className='w-[100%] h-[100%] flex items-center justify-start'>
        <Sidebar/>
        <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] overflow-x-hidden py-[50px] ml-[150px] mt-[50px]'>
          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px]'>All Listed Products</div>
          {
            list?.length>0 ? (list.map((item,index)=>(<div key={index} className='w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] mb-[15px]'>
              <img src={item.image1} className='w-[30%] md:w-[120px] h-[90%] rounded-lg' alt="" />
              <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]'>
                <div className='w-[100%] md:text-[20px] ml-[10px] text-[15px] text-[#93e1ed]'>
                  {item.name}
                </div>
                <div className='md:text-[17px] text-[15px] ml-[10px] text-[#93e1ed]'>{item.category}</div>
                <div className='md:text-[17px] text-[15px] ml-[10px] text-[#93e1ed]'>₹ {item.price}</div>
              </div>
              <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center'>
                <span className='w-[30px] h-[30%] flex items-center justify-center rounded-md hover:bg-red-300 hover:text-black cursor-pointer' onClick={()=>removeList(item._id)}>x</span>
              </div>
            </div>))):
            (<div className='text-[white] text-lg'>No Products Available</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Lists
