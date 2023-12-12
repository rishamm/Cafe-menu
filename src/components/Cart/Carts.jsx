import React, { useState } from 'react'
import Cartimg from '../../assets/images/Cartimg.jpg'
const Carts = () => {
    const [count,setCount]=useState(0)
  return (
   <>
   <div className="container mx-auto  h-screen relative px-2 mt-5 ">
      <div  className=" grid grid-cols-3 gap-2 bg-black rounded-md">
        <div className="text-white   col-span-1">
          <img src={Cartimg} className="w-full h-full rounded-l-md object-cover"/>
          
        </div>
        <div className="text-white justify-center flex flex-col  px-4 col-span-2 h-40">
          <h4 className="text-xl py-1 " >Coffee</h4>
          <p className="text-xs leading-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolorum, commodi sit quae deserunt minima,
          </p>
          <div className="text-black flex items-center gap-4  py-3">
          <button className="px-5 py-1 rounded bg-white" onClick={()=>setCount(count<=0?0:count-1)}>
            -
          </button>
          <h4 className="text-white">{count}</h4>
          <button className="px-5 py-1 rounded bg-white" onClick={()=>setCount(count+1)}>
            +
          </button>
        </div>
        </div>
      
      </div>
      
      </div>
   </>
  )
}

export default Carts