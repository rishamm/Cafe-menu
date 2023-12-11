import React from "react";
import "./Header.css";
import logo from '../../assets/header/logo1.jpg'
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <nav class="bg-light-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img src={logo} className="logodesign w-40"/>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                {/* <div class="flex space-x-4">
                                    
                                    <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                    <a href="#" class="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" class="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" class="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                </div> */}
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative   p-1 text-gray-400 hover:text-black focus:outline-none "
              >
                <LuShoppingCart className="text-[25px]" />  
              </button>

              {/* <!-- Profile dropdown --> */}
              <div class="relative ml-3">
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
