import React, { useState } from "react";
import Carts from "../components/Cart/Carts";
import OrderButton from "../components/Cart/OrderButton";


function Cart() {

  return (
    <>
     <div className="relative">  
     <Carts/>
      <OrderButton/>
     </div>
    </>
  );
}

export default Cart;
