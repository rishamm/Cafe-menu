import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderButton = () => {
 const navigate = useNavigate()
    return (
    <>
    <div className="flex justify-center my-3 fixed bottom-0 w-full " onClick={()=>navigate('/orders')}>
        <button className="bg-black text-white rounded px-20 py-2">
          Order Now
        </button>
      </div>
    </>
  )
}

export default OrderButton