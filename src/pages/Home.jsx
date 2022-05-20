import React from 'react';

import Header from "../components/card/header/Header";
import Sales from "../components/card/sales/SalesCard";


export default function Home(){
    return(
      <div className="bg-gray-100">
        <Header />
        <Sales />
      </div>
    );
}