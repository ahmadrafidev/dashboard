import React from "react";

import { HiDotsVertical } from "react-icons/hi";
import Cart from '../../assets/cart.png';
import DownArrow from '../../assets/DownArrow.png';

export default function Sales(){
  return(
    <div className="">
      <div className="w-72 h-32 bg-white shadow-md">
        <div className="flex justify-between px-4 py-3 items-center">
          <h2 className="text-gray-400">Sales Turnover</h2>
          <HiDotsVertical size={20} className="text-gray-400"/>
        </div>
        <div className="flex justify-between px-4 items-center">
          <div>
            <p className="font-bold text-2xl">Rp 3,600,000</p>
            <p className="font-light text-xs text-gray-400 flex items-center py-1">
              <span><img src={DownArrow} alt="down arrow image" className="mr-0.5"/></span>
              <span className="text-red-600 font-semibold mr-0.5">13.8%</span>
              last period in product sold
            </p>
          </div>
          <div className="mr-3">
            <img src={Cart} alt="cart image"/>
          </div>
        </div>
      </div>
    </div>
  );
}