import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name,image,id,price}) {
    let {currency}=useContext(shopDataContext)
    let navigate=useNavigate()
  return (
    <div className='w-[250px] max-w-[90%] h-[350px] bg-[#183a39] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-zinc-700' onClick={()=>navigate(`/productDetail/${id}`)}>
      <img src={image} alt="" className='w-[100%] h-[82%] rounded-sm object-cover' />
      <div className='text-blue-100 text-[18px] py-[10px]'>{name}</div>
      <div className='text-blue-50 text-[14px]'>{currency} {price}</div>
    </div>
  )
}

export default Card
