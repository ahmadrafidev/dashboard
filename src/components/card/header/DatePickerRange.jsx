import React from "react";
import {FaCalendarAlt} from "react-icons/fa";

export default function DateRange(){

  return(
    <div className="w-[calc(384px+100px)]">
      <div className="bg-white shadow-md px-4 flex items-center h-10">
        <div className="mr-4">
          <FaCalendarAlt color="#D2D2D2" size={20}/>
        </div>
        <div>
          <p className="text-gray-400 text-base">Period</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}