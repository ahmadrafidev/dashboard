import React from "react";

import { HiDotsVertical } from "react-icons/hi";
import ProductItemCard from "../product/ProductItemCard";

export default function BestSellingSku() {
  return(
    <div className="px-14 pt-4">
      <div className="bg-white max-w-xs h-96 shadow-md">
        <div className="flex justify-between px-6 py-3 items-center">
          <h2 className="text-gray-600 text-lg">BEST SELLING SKU</h2>
          <HiDotsVertical size={20} className="text-gray-600"/>
        </div>
        <div className="flex-col px-6">
          <ul className="">
            <li className="mb-2">
              <ProductItemCard/>
            </li>
            <li className="mb-2">
              <ProductItemCard/>
            </li>
            <li className="mb-2">
              <ProductItemCard/>
            </li>
            <li className="mb-2">
              <ProductItemCard/>
            </li>
            <li className="mb-2">
              <ProductItemCard/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}