import React, { useContext, useState } from 'react'
import Logo from "../assets/Logo.png"
import google from "../assets/google.png"
import { FaCreativeCommonsSamplingPlus, FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { userDataContext } from '../context/UserContext';
function Login() {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [show,setShow]=useState(false);
  let navigate=useNavigate();
  let {serverUrl}=useContext(authDataContext)
  let {getCurrentUser}=useContext(userDataContext)
  const handleLogin=async (e) => {
    e.preventDefault()
    try {
      let result=await axios.post(serverUrl+'/api/auth/login',{email,password},{withCredentials:true})
      console.log(result.data)
      await getCurrentUser()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  const googleLogin=async()=>{
    try {
      const response=await signInWithPopup(auth,provider)
      let user=response.user
      let name=user.displayName
      let email=user.email
      const result=await axios.post(serverUrl+"/api/auth/googleLogin",{name,email},{withCredentials:true})
      console.log(result.data)
      console.log(response.user)
      await getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("ACTUAL ERROR =", error)
      console.log(error.code)
      console.log(error.message)
      console.log(error.response?.data);
    }
  }
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-gray-900 to-cyan-950 text-[white] flex flex-col items-center justify-start'>
      <div onClick={()=>navigate("/")} className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Login Page</span>
        <span className='text-[16px]'>Welcome to OneCart, Place your Order</span>
      </div>
      <div className='max-w-[600px] w-[90%] h-[470px] bg-black/40 border-[1px] rounded-lg border-white/50 backdrop-blur-2xl shadow-lg flex items-center justify-center'>
        <form onSubmit={handleLogin} action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <div onClick={googleLogin} className='w-[90%] h-[50px] bg-[#2c7264ad] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
            <img className='w-[40px]' src={google} alt="" />Login account with Google
          </div>
          <div className='w-[90%] flex items-center justify-center gap-[15px]'>
            <div className='flex-1 h-[1px] bg-gray-600'></div> <span>OR</span> <div className='flex-1 h-[1px] bg-gray-600'></div>
          </div>
          <div className='relative w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]'>
            <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-[2px] border-gray-500 bg-transparent rounded-lg backdrop-blur-sm shadow-lg placeholder-white px-[20px] font-semibold' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type={show?"text":"password"} placeholder='password' required className='w-[100%] h-[50px] border-[2px] border-gray-500 bg-transparent rounded-lg backdrop-blur-sm shadow-lg placeholder-white px-[20px] font-semibold' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {show && <FaEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[56%]' onClick={()=>setShow(prev=>!prev)}/>}
            {!show && <FaEyeSlash className='w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[56%]' onClick={()=>setShow(prev=>!prev)}/>}
            <button className='w-[100%] h-[50px] bg-[#5429b0] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold text-white cursor-pointer'>Login</button>
            <p className='flex gap-[10px]'>You haven't any Account? <span className='text-[#c988fe] font-semibold text-[17px] cursor-pointer' onClick={()=>navigate("/signup")}>Create New Account</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
