import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import uploadImage from "../assets/uploadImage.png"
import { useState } from 'react'
import { AuthDataContext } from '../context/authContext'
import axios from 'axios'
function Add() {
  let [image1,setImage1]=useState(false)
  let [image2,setImage2]=useState(false)
  let [image3,setImage3]=useState(false)
  let [image4,setImage4]=useState(false)
  let [name,setName]=useState("")
  let [description,setDescription]=useState("")
  let [category,setCategory]=useState("Men")
  let [price,setPrice]=useState("")
  let [subCategory,setSubCategory]=useState("TopWear")
  let [bestSeller,setBestSeller]=useState(false)
  let [sizes,setSizes]=useState([])
  let {serverUrl}=useContext(AuthDataContext)
  const handleAddProduct=async(e)=>{
    e.preventDefault()
    try {
      let formData=new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestSeller",bestSeller)
      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)
      for (let pair of formData.entries()) {
      console.log(pair[0], pair[1])
      }
      let result=await axios.post(serverUrl+"/api/product/addProduct",formData,{withCredentials:true})
      console.log(result.data)
      if(result.data){
        setName("")
        setDescription("")
        setCategory("Men")
        setPrice("")
        setSubCategory("TopWear")
        setBestSeller(false)
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[black] to-[#1d3a3a] text-[white] overflow-x-hidden relative'>
      <Nav/>
      <Sidebar/>
      <div className='bottom-[5%] w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0'>
        <form onSubmit={handleAddProduct} action="" className='w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]'>
          <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-[white] mt-[20px]'>Add Product Page</div>
          <div className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Upload Images</p>
            <div className='w-[100%] h-[100%] flex items-center justify-start'>
              <label htmlFor="image1" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#12b6cb]'>
                <img src={!image1?uploadImage:URL.createObjectURL(image1)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1f321f] border-[2px]' />
                <input required type="file" id='image1' hidden onChange={(e)=>setImage1(e.target.files[0])}/>
              </label>
              <label htmlFor="image2" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#12b6cb]'>
                <img src={!image2?uploadImage:URL.createObjectURL(image2)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1f321f] border-[2px]' />
                <input required type="file" id='image2' hidden onChange={(e)=>setImage2(e.target.files[0])}/>
              </label>
              <label htmlFor="image3" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#12b6cb]'>
                <img src={!image3?uploadImage:URL.createObjectURL(image3)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1f321f] border-[2px]' />
                <input required type="file" id='image3' hidden onChange={(e)=>setImage3(e.target.files[0])}/>
              </label>
              <label htmlFor="image4" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#12b6cb]'>
                <img src={!image4?uploadImage:URL.createObjectURL(image4)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1f321f] border-[2px]' />
                <input required type="file" id='image4' hidden onChange={(e)=>setImage4(e.target.files[0])}/>
              </label>
            </div>
          </div>
          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Name
            </p>
            <input required type="text" placeholder='Type Here' onChange={(e)=>setName(e.target.value)} value={name} className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#41a7ae] border-[2px] bg-slate-600 px-[20px] text-[18px] placeholder:text-gray-400 ' />
          </div>
          <div className='w-[80%] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Description
            </p>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder='Type Here' className='w-[600px] h-[100px] max-w-[98%] h-[40px] rounded-lg hover:border-[#41a7ae] border-[2px] bg-slate-600 px-[20px] text-[18px] placeholder:text-gray-400 py-[10px]' />
          </div>
          <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
            <div className='md:w-[45%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>
                Product Category
              </p>
              <select name="" id="" onChange={(e)=>setCategory(e.target.value)} value={category} className='bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#329eac] border-[2px]'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div className='md:w-[45%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>
                Sub-Category
              </p>
              <select name="" id="" onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className='bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#329eac] border-[2px]'>
                <option value="TopWear">Top Wear</option>
                <option value="BottomWear">Bottom Wear</option>
                <option value="WinterWear">Winter Wear</option>
              </select>
            </div>
          </div>
          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Price
            </p>
            <input required type="number" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='₹ 2000' className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#41a7ae] border-[2px] bg-slate-600 px-[20px] text-[18px] placeholder:text-gray-400 ' />
          </div>
          <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:py-[0px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Size</p>
            <div className='flex items-center justify-start gap-[15px] flex-wrap'>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#3894ab] border-[2px] cursor-pointer ${sizes.includes("S")?"bg-green-400 text-black border-[#31809c]":""}`} onClick={()=>setSizes(prev=>prev.includes("S")?prev.filter(item=>item!=="S"):[...prev,"S"])}>S</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#3894ab] border-[2px] cursor-pointer ${sizes.includes("M")?"bg-green-400 text-black border-[#31809c]":""}`} onClick={()=>setSizes(prev=>prev.includes("M")?prev.filter(item=>item!=="M"):[...prev,"M"])}>M</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#3894ab] border-[2px] cursor-pointer ${sizes.includes("L")?"bg-green-400 text-black border-[#31809c]":""}`} onClick={()=>setSizes(prev=>prev.includes("L")?prev.filter(item=>item!=="L"):[...prev,"L"])}>L</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#3894ab] border-[2px] cursor-pointer ${sizes.includes("XL")?"bg-green-400 text-black border-[#31809c]":""}`} onClick={()=>setSizes(prev=>prev.includes("XL")?prev.filter(item=>item!=="XL"):[...prev,"XL"])}>XL</div>
              <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#3894ab] border-[2px] cursor-pointer ${sizes.includes("XXL")?"bg-green-400 text-black border-[#31809c]":""}`} onClick={()=>setSizes(prev=>prev.includes("XXL")?prev.filter(item=>item!=="XXL"):[...prev,"XXL"])}>XXL</div>
            </div>
          </div>
          <div className='w-[80%] flex items-center justify-start gap-[10px] mt-[20px]'>
            <input onChange={(e) => setBestSeller(e.target.checked)} checked={bestSeller} type="checkbox" id='checkbox' className='w-[25px] h-[25px] cursor-pointer' />
            <label htmlFor="checkbox" className='text-[18px] md:text-[22px] font-semibold'>
              Add to BestSeller
            </label>
          </div>
          <button className='w-[140px] px-[20px] py-[20px] rounded-xl bg-[#3a8dab] flex items-center justify-center gap-[10px] text-[black] active:bg-slate-700 active:text-white active:border-[2px] border-white cursor-pointer'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
