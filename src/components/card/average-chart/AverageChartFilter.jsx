import React from "react";

export default function AverageChartFilter(){

  return(
    <div className="w-32 h-8 bg-white outline outline-gray-300 flex mr-1">
      <div className="flex items-center px-0.5">
        <select>
          <option value='24h'>Last 24 hours</option>
          <option value='7d'>Last week</option>
          <option value='1mo'>Last month</option>
          <option value='6mo'>Last 6 months</option>
          <option value='1y'>Last years</option>
        </select>
      </div>
    </div>
  );
}