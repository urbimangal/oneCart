import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item],
                    })
                }
            }
        }
        setCartData(tempData)
    }, [cartItem])

    return (
        <div className='w-[100vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#110c14] to-[#101f23]'>
            <div className='h-[8%] w-[100%] text-center mt-[80px]'>
                <Title text1={"YOUR"} text2={"CART"} />
            </div>
            <div className='w-[100%] h-[98%] flex flex-wrap gap-[20px]'>
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id)
                        return (
                            <div key={index} className='w-[100%] border-t border-b'>
                                <div className='w-[100%] flex items-center bg-[#27464a] py-[10px] px-[15px] rounded-2xl gap-[10px]'>

                                    <img className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-md flex-shrink-0' src={productData.image1} alt="" />

                                    <div className='flex flex-col gap-[6px] flex-1 min-w-0'>
                                        <div className='flex items-center gap-[70px]'>
                                            <p className='md:text-[22px] text-[15px] text-[#f3f9fc]'>
                                                {productData.name}
                                            </p>

                                            <input
                                                type="number"
                                                min={1}
                                                defaultValue={item.quantity}
                                                onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                                                className="translate-y-5 w-[45px] md:w-[56px] py-[4px] px-[8px] text-white text-[15px] md:text-[18px] font-semibold bg-[#518080b4] border-[1px] border-[#9ff9f9] rounded-md flex-shrink-0"
                                            />
                                        </div>
                                        <div className='flex items-center gap-[10px]'>
                                            <p className='text-[14px] md:text-[18px] text-[#aaf4e7]'>
                                                {currency} {productData.price}
                                            </p>
                                            <p className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-[13px] text-[white] bg-[#518080b4] rounded-md flex items-center justify-center border-[1px] border-[#9ff9f9]'>
                                                {item.size}
                                            </p>
                                        </div>
                                    </div>

                                    <RiDeleteBin5Fill
                                        className='text-blue-300 text-[20px] md:text-[25px] cursor-pointer flex-shrink-0'
                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                    />

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <button
                        className='text-[16px] md:text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[40px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] ml-[10px] md:ml-[30px] mt-[20px]'
                        onClick={() => cartData.length > 0 ? navigate("/placeOrder") : "Your Cart is empty!"}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart