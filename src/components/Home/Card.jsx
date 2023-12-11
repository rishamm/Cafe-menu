import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({menu}) => {
  return (
    <div className="card  bg-black container mx-auto">
       <div className="py-4 pt-10">
            <h4 className="text-white text-center text-2xl font-bold ">Main Menu</h4>
        </div>
      <div className="  h-full grid grid-cols-2 gap-5 text-white py-7 px-4 ">
        {menu.map((item, id) => (
          <>
            <div className="border border-white rounded-md pl-3 pr-2 items-center py-5 flex  justify-between" key={id}>
              {item.data}
              <IoIosArrowForward />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
