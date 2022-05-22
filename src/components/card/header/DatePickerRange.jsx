import React from "react";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react'
import {FaCalendarAlt} from "react-icons/fa";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DateRange(){
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  return(
    <div className="w-[calc(384px+100px)]">
      <div className="bg-white shadow-md px-4 flex items-center h-8">
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