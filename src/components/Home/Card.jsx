import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({menu,heading}) => {
    console.log(heading)
  return (
    <div className="card  container mx-auto">
       <div className="py-4 ">
          {heading&&<h4 className="text-black text-center text-2xl font-bold ">{heading&&heading}</h4>}
        </div>
      <div className="  h-full grid grid-cols-2 gap-5 text-white py-7 px-4 ">
        {menu.map((item, id) => (
          <>
            <div className="border border-black text-black rounded-md pl-3 pr-2 items-center py-5 flex  justify-between" key={id}>
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
