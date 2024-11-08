import axios from 'axios';
import { Spin } from 'antd'
import React, { Fragment, PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from 'recharts';

export default function Chart (){
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({
        data :[],
    });
    useEffect (function (){
        axios
        .get(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=m15&baseId=ethereum&quoteId=bitcoin`)
        .then (function(response){
            setData(response.data);
            setLoading(false);
        })
        .catch (function(erorr){})
        setLoading(false);
    },[])
    const [loadings, setLoadings] = useState([]);//<----------loading---------->
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
});
setTimeout(() => {
  setLoadings((prevLoadings) => {
    const newLoadings = [...prevLoadings];
    newLoadings[index] = false;
    return newLoadings;
  });
}, 6000);
};

    function renderFarm(){
        return data.data.map(function({open,high,low,close,volume,period}){
           return (
            <li>
               <canvas>{open}</canvas> 
               <canvas>{close}</canvas>
               <canvas>{high}</canvas>
               <canvas>{low}</canvas>
            </li>
                
            );
        });
           
    }
    return (
        <Fragment>
            <Spin spinning={loading} size={"large"} fullscreen/>

            <LineChart width={600} height={300} data={renderFarm()}>
                <CartesianGrid stroke='#cc'/>
                <XAxis dataKey={"date"} />
                <YAxis dataKey={"price"}/>
            </LineChart>
        </Fragment>
    )
}