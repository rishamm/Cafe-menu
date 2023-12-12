import React from "react";
import Cartimg from '../assets/images/cartimg.jpg'

function Cart() {
  return (
    <>
      <div className="container mx-auto  h-screen ">
      <div  className=" grid grid-cols-2  bg-black rounded-md">
        <div className="text-white flex">
          <img src={Cartimg} className="h-52 w-52  rounded-l-md object-cover"/>
          <div className="text-white px-4">
          <h4 className="text-2xl py-4 " >Coffee</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolorum, commodi sit quae deserunt minima, ab veritatis eveniet, natus nam voluptatum autem. Veritatis, quos. Minima eum facere illo exercitationem dolor.
          </p>
        </div>
        </div>
       
        <div>
          <button className="px-3 rounded bg-white">
            +
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cart;
