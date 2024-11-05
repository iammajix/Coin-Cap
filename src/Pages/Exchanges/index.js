import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";

import axios from "axios";
import TotalMarket from "../../Copmonents/Helpers/TotalMarket";

export default function Exchanges (){
    const [data,setData]=useState({
       data :[] ,
    });
    useEffect (function (){
        axios
        .get("https://api.coincap.io/v2/exchanges")
        .then(function(response){
            setData(response.data)
        })
        .catch(function(erorr){})
    },[])



function renderFarm (){
    return data.data.map(function (
        {id,name,rank,tradingPairs,volumeUsd,percentTotalVolume,status}){
    return (
        <li key={id}>
            <div className="ex-rank col-4 items-pad">
                <span>{rank}</span>
            </div>
            <div className="ex-name col-12 items-pad">
                <span>{name}</span>
            </div>
            <div className="ex-tradingpairs col-12 items-pad">
              <span>{tradingPairs}</span>  
            </div>
            <div className="ex-volume col-12 items-pad">
              <span>${`${parseFloat(volumeUsd/1000000000).toFixed(2)}`}</span>  
            </div>
            <div className="ex-total col-12 items-pad">
              <span>{`${parseFloat(percentTotalVolume).toFixed(2)}`}</span>  
            </div>
            <div className="ex-status col-12 items-pad">
              <span>{status}</span>  
            </div>
        </li>
    )
    })
}
    return (
        <PrimaryLayout>
            <Fragment>
                <div><TotalMarket/></div>
          <div className="list">
                <div className="container">
                    <div className="row p-top-70">
                        <div className="title col-12">
                            <ul className=" flex">
                                <li className="title-rank"><h3>Rank</h3></li>
                                <li className="title-name"><h3>Name</h3></li>
                                <li className="title-price"><h3>trading Pairs</h3></li>
                                <li className="title-marketcap"><h3>Top Pair</h3></li>
                                <li className="title-vwap"><h3>Volume (24Hr)</h3></li>
                                <li className="title-supply"><h3>total(%)</h3></li>
                                <li className="title-volume"><h3>Status</h3></li>
                            </ul>
                        </div>
                    </div>
                        <div className="items">
                            <ul>{renderFarm()}</ul>
                        </div>            
                </div>
            </div>   
            </Fragment>
        </PrimaryLayout>
        
    )
}