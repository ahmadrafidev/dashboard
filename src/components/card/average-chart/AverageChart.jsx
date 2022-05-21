import React from "react";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {HiDotsVertical} from "react-icons/hi";

export default function AverageChart(){
  return(
    <div className="mr-5 pt-4">
      <div className="bg-white w-[calc(195px+384px)] h-96">
        <div className="flex justify-between px-8 py-5 items-center">
          <h2 className="text-gray-600 text-lg">AVERAGE PURCHASE VALUE</h2>
          <HiDotsVertical size={25} className="text-gray-600"/>
        </div>
        <div>
          <ComposedChart
            width={550}
            height={330}
            data={dummyData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gross" barSize={20} fill="#279D44" />
            <Line type="monotone" dataKey="nett" stroke="#FFE854" strokeWidth={2}/>
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

const dummyData = [
  {
    name: "Mon",
    gross: 590,
    nett: 500,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Tue",
    gross: 868,
    nett: 600,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Wed",
    gross: 1397,
    nett: 670,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Thurs",
    gross: 1480,
    nett: 1200,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Fri",
    gross: 1520,
    nett: 950,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Sat",
    gross: 1400,
    nett: 1000,
    pv: 680,
    amt: 1700,
    cnt: 380
  },
  {
    name: "Sun",
    gross: 1100,
    nett: 800,
    pv: 680,
    amt: 1700,
    cnt: 380
  },

];