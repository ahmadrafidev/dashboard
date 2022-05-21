import React from "react";

import CompetitorPicture from '../../assets/competitor.png';

export default function CompetitorProduct(){
  return(
    <div className="flex w-64 h-14 bg-white rounded-md outline outline-gray-300">
      <img src={CompetitorPicture} alt="foto danone" className="object-fill rounded-md h-14 w-14 items-start "/>
      <div className="flex-col mb-2 py-2 px-1">
        <h4 className="text-base">[Nama Produk]</h4>
        <div className="flex text-gray-500">
          <p className="text-sm">Rp. XXX</p>
          <p className="ml-8 text-sm">[jml terjual]</p>
        </div>
      </div>
    </div>
  );
}