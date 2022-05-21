import React from "react";

import { HiDotsVertical } from "react-icons/hi";
import CompetitorProduct from "../product/CompetitorProduct";

export default function TopCompetitorSku() {
  return(
    <div className="ml-16 pt-4">
      <div className="bg-white max-w-xs h-96 shadow-md">
        <div className="flex justify-between px-6 py-3 items-center">
          <h2 className="text-gray-600 text-lg"> TOP COMPETITOR SKU</h2>
          <HiDotsVertical size={20} className="text-gray-600"/>
        </div>
        <div className="flex-col px-6">
          <ul className="">
            <li className="mb-2.5">
              <CompetitorProduct/>
            </li>
            <li className="mb-2.5">
              <CompetitorProduct/>
            </li>
            <li className="mb-2.5">
              <CompetitorProduct/>
            </li>
            <li className="mb-2.5">
              <CompetitorProduct/>
            </li>
            <li className="mb-2.5">
              <CompetitorProduct/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}