import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from "../context/UserContext";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { authDataContext } from "../context/AuthContext";
import { MdCollections } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
function Nav() {
  let { getCurrentUser,userData } = useContext(userDataContext);
  let {serverUrl}=useContext(authDataContext)
  let {showSearch, setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();
  const handleLogout=async()=>{
    try {
        const result=await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
        console.log(result.data)
        await getCurrentUser()
        navigate("/login")
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="w-[100vw] h-[70px] bg-[#c5e1e2]/90 z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black ">
      <div className="w-[30%] flex items-center justify-start gap-[10px]">
        <img src={Logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-[black] font-sans">OneCart</h1>
      </div>
      <div className="w-[40%] hidden md:block ">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li onClick={()=>navigate("/")} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#1e351e] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li onClick={()=>navigate("/collections")} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#1e351e] py-[10px] px-[20px] rounded-2xl">
            COLLECTIONS
          </li>
          <li onClick={()=>navigate("/about")} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#1e351e] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li onClick={()=>navigate("/contact")} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#1e351e] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch && (
          <FaSearch
            className="w-[25px] h-[25px] cursor-pointer"
            onClick={() => {setShowSearch((prev) => !prev);navigate("/collections")}}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!userData && (
          <FaUserCircle className="w-[29px] h-[29px] cursor-pointer" onClick={() => setShowProfile((prev) => !prev)}/>
        )}
        {userData && (
          <div
            className="w-[30px] h-[30px] bg-[black] text-[white] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name?.slice(0, 1)}
          </div>
        )}
        <MdOutlineShoppingCart className="w-[29px] h-[29px] cursor-pointer hidden md:block" onClick={()=>navigate("/cart")} />
        <p className="absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block">
          {getCartCount()}
        </p>
      </div>
      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#addae5] absolute top-[70px] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="lg:w-[50%] w-[80%] h-[60%] bg-[#1f2937] border border-slate-500 rounded-[50px] px-[40px] placeholder:text-slate-300 text-white text-[18px] outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
            placeholder="search here.." onChange={(e)=>{setSearch(e.target.value)}} value={search}
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[black] top-[110%] right-[4%] border-[1px] border-[gray] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around text-white flex-col text-[17px] py-[10px]">
            {!userData && (
              <li
                className="w-[100%] hover:bg-zinc-800 px-[15px] py-[10px] cursor-pointer rounded-[10px]"
                onClick={() => {navigate("/login");setShowProfile(false)}}
              >
                Login
              </li>
            )}
            {userData && <li onClick={()=>{handleLogout();setShowProfile(false)}} className="w-[100%] hover:bg-zinc-800 px-[15px] py-[10px] cursor-pointer rounded-[10px]">
              Logout
            </li>}
            <li onClick={()=>navigate("/orders")} className="w-[100%] hover:bg-zinc-800 px-[15px] py-[10px] cursor-pointer rounded-[10px]">
              Orders
            </li>
            <li onClick={()=>navigate("/about")} className="w-[100%] hover:bg-zinc-800 px-[15px] py-[10px] cursor-pointer rounded-[10px]">
              About
            </li>
          </ul>
        </div>
      )}
      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-zinc-900 md:hidden text-[12px]">
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]"><IoHomeSharp className="w-[28px] h-[28px] text-[white] md:hidden cursor-pointer" onClick={()=>navigate("/")} /> Home</button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]"><MdCollections className="w-[28px] h-[28px] text-[white] md:hidden cursor-pointer" onClick={()=>navigate("/collections")} /> Collections</button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]"><MdContacts className="w-[28px] h-[28px] text-[white] md:hidden cursor-pointer" onClick={()=>navigate("/contact")} /> Contact</button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]"><MdOutlineShoppingCart className="w-[28px] h-[28px] text-[white] md:hidden cursor-pointer" onClick={()=>navigate("/cart")} /> Cart</button>
        <p className="absolute w-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-[black] font-semibold rounded-full text-[9px] top-[8px] right-[18px]">{getCartCount()}</p>
      </div>
    </div>
  );
}

export default Nav;
