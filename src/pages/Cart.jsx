import React from "react";
import Cartimg from '../assets/images/cartimg.jpg'

function Cart() {
  return (
    <>
      <div className="container mx-auto mt-20 p-2">
        <div className="card mb-3  bg-black rounded">
          <div className="flex">
            <div className="w-4/12">
              <img src={Cartimg} className="rounded-start" alt="..." />
            </div>
            <div className="w-8/12 ml-4">
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <p className="card-text text-white">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary text-white">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
