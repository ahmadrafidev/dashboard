import React from 'react';

import Header from "../components/card/header/Header";
import Sales from "../components/card/sales/SalesCard";
import MarketInsight from "../components/card/market-insight/MarketInsight";


export default function Home(){
    return(
      <div className="bg-gray-100 px-14 w-[calc(100%-70px)]">
        <Header />
        <MarketInsight/>
        <Sales />
      </div>
    );
}