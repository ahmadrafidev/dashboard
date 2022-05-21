import React from 'react';

import Header from "../components/card/header/Header";
import Sales from "../components/card/sales/SalesCard";
import MarketInsight from "../components/card/market-insight/MarketInsight";
import BestSellingSku from "../components/card/best-selling-sku/BestSellingSkuCard";
import TopCompetitorSku from "../components/card/top-competitor-sku/TopCompetitorSkuCard";
import AverageChart from "../components/card/average-chart/AverageChart";


export default function Home(){
    return(
      <div className="bg-gray-100 px-4 w-[calc(100%-70px)]">
        <Header />
        <MarketInsight/>
        <Sales />
        <div className="flex px-14 mt-2">
          <AverageChart/>
          <BestSellingSku />
          <TopCompetitorSku/>
        </div>
      </div>
    );
}