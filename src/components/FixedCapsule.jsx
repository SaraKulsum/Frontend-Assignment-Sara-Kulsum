import React, { useRef,useEffect } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdCall } from "react-icons/md";
const FixedCapsule = ({isSmall}) => {
   
  
  return (
    <div  className={`${isSmall && `translate-x-24`} fixed border transition-all  duration-700 border-[#9E9E9E] bg-[#727272] z-[99] rounded-full px-4 py-2 bottom-10 flex gap-3 font-jakarta`}>
      <span className="text-[#FFFFFF] flex gap-1 items-center font-thin text-xs">
        <AiOutlineSchedule size={17} className="fill-[#BEB3A1] pb-[1px]" />
       {!isSmall&&`LOREM`}
      </span>
      <span className="block bg-[#FFFFFF] h-6 w-[1px]" />
      <span className="text-[#FFFFFF] flex gap-1 items-center font-thin text-xs">
        <MdCall size={17} className="fill-[#BEB3A1]" />
        {!isSmall&&`IPSUM`}
      </span>
    </div>
  );
};

export default FixedCapsule;
