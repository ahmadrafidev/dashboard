import React from 'react';
import DateRange from "./DatePickerRange";

export default function Header(){
  return(
    <div className="flex flex-row justify-between p-14">
      <div>
        <p className='text-4xl text-gray-500'>Dashboard</p>
      </div>
      <div>
        <DateRange/>
      </div>
    </div>
  );
}