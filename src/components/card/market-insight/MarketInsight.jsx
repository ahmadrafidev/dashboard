import React from 'react';

import { IoIosArrowUp } from "react-icons/io";
import HelpIcon from '../../assets/Help.png';

export default function MarketInsight(){
  return(
    <div className="px-14 w-[calc(100%)] mb-8">
      <div className="bg-green-500 h-12">
        <div className="flex flex-row items-center justify-between p-2 px-4">
          <div className="text-xl text-white font-semibold">
            <p>Market Insights</p>
          </div>
          <div className="flex items-center">
            <div>
              <img src={HelpIcon} alt="Help Icon"/>
            </div>
            <div className="text-sm text-white font-light underline ml-1">
              <p>Click Here to Help</p>
            </div>
            <div className="ml-3">
              <IoIosArrowUp size={25} color={'#F5F5F5'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}