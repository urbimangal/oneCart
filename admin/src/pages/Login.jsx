import React from 'react'
import Logo from "../assets/Logo.png"
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { useState } from 'react';
import axios from "axios"
import { useContext } from 'react';
import { AuthDataContext } from '../context/authContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
function Login() {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [show,setShow]=useState(false);
  let {serverUrl}=useContext(AuthDataContext)
  let {adminData,getAdmin}=useContext(adminDataContext)
  let navigate=useNavigate()
  const adminLogin=async(e)=>{
    e.preventDefault()
    try {
      const result=await axios.post(serverUrl+"/api/auth/adminLogin",{email,password},{withCredentials:true})
      console.log(result.data)
      getAdmin()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-gray-900 to-cyan-950 text-[white] flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
          <img className='w-[40px]' src={Logo} alt="" />
          <h1 className='text-[22px] font-sans'>OneCart</h1>
        </div>
        <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
          <span className='text-[25px] font-semibold'>Login Page</span>
          <span className='text-[16px]'>Welcome to OneCart, Apply to Admin Login</span>
        </div>
        <div className='max-w-[600px] w-[90%] h-[400px] bg-black/40 border-[1px] rounded-lg border-white/50 backdrop-blur-2xl shadow-lg flex items-center justify-center'>
          <form action="" onSubmit={adminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
            <div className='relative w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]'>
              <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-[2px] border-gray-500 bg-transparent rounded-lg backdrop-blur-sm shadow-lg placeholder-white px-[20px] font-semibold' onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <input type={show?"text":"password"} placeholder='password' required className='w-[100%] h-[50px] border-[2px] border-gray-500 bg-transparent rounded-lg backdrop-blur-sm shadow-lg placeholder-white px-[20px] font-semibold' onChange={(e)=>setPassword(e.target.value)} value={password}/>
              {show && <FaEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev=>!prev)}/>}
              {!show && <FaEyeSlash className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev=>!prev)}/>}
              <button className='w-[100%] h-[50px] bg-[#5429b0] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold text-white cursor-pointer'>Login</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login
