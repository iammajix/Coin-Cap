import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";
import { Link, useParams } from "react-router-dom";
import { Button,Flex, Spin } from 'antd'
import { pageTitle } from "../../Copmonents/Helpers/Title/TitleMaker";
import axios from "axios";
import TotalMarket from "../../Copmonents/Helpers/TotalMarket";
import "./style.css";

export default function Exchanges (){
    const [offset,setOffset]=useState(0)
    const [loading ,setLoading]=useState(false);
    const [data,setData]=useState ([]);  
    const LIMIT=20
    useEffect(function(){
        setLoading(true);
        axios
        .get(`https://api.coincap.io/v2/exchanges/?offset=${offset}&limit=${LIMIT}`)
        .then(function(response){
            setData (response.data.data);
            setOffset(offset+LIMIT)
            setLoading(false);
        })
        .catch(function(erorr){
            setLoading(false);
        });
    },[]);
function viewMore(){    
    setLoading(true);
        axios
        .get(`https://api.coincap.io/v2/exchanges/?offset=${offset}&limit=${LIMIT}`)
        .then(function(response){
            setData ([...data,...response.data.data]);
            setOffset(offset+LIMIT)
            setLoading(false);
        })
        .catch(function(erorr){
            setLoading(false);
        });
}
    useEffect (function(){
        pageTitle("Exchanges")
    },[]);
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


function renderFarm (){
    return data.map(function (
        {id,name,rank,tradingPairs,volumeUsd,percentTotalVolume,status}){
    return (
        <li key={id}>
            <div className="ex-rank col-1 items-pad">
                <span>{rank}</span>
            </div>
            
            <div className="ex-name col-3 items-pad">
                <Link to={`/exchanges/${id}`}>
                <a style={{ color :'#000000', fontsize: '0.8rem', opacity: '0.7;'}}>{name}</a>
                </Link>
            </div>
            
            <div className="ex-tradingpairs col-1 items-pad">
              <span>{tradingPairs}</span>  
            </div>
            <div className="ex-volume col-2 items-pad">
              <span>${`${parseFloat(volumeUsd/1000000000).toFixed(2)}`}b</span>  
            </div>
            <div className="ex-total col-2 items-pad">
              <span>{`${parseFloat(percentTotalVolume).toFixed(2)}`}</span>  
            </div>
            <div className="ex-status col-2 items-pad">
              <span>{status}ok</span>  
            </div>
        </li>
    )
    })
}
    return (
        <PrimaryLayout>
                 <Spin spinning={loading} size={"large"} fullscreen/>
            <Fragment>
                <div><TotalMarket/></div>
          <div className="list">
                <div className="container">
                    <div className="row p-top-70">
                        <div className="title col-12">
                            <ul className=" flex">
                                <li className="title-rank"><h3>Rank</h3></li>
                                <li className="title-name" style={{marginLeft:'9rem'}}><h3>Name</h3></li>
                                <li className="title-pairs"><h3>trading Pairs</h3></li>
                                <li className="title-volume"><h3>Volume (24Hr)</h3></li>
                                <li className="title-total"><h3>total(%)</h3></li>
                                <li className="title-status"><h3>Status</h3></li>
                            </ul>
                        </div>
                    </div>
                        <div className="items">
                            <ul>{renderFarm()}</ul>
                        </div>            
                </div>
            </div>   
            <Flex justify="center">
            <Button className="button"
                type="primary"
                loading={loadings[1]}
                onClick={() => viewMore(1)}
                shape="round"
                >
                View More
            </Button>
            </Flex>
            </Fragment>
        </PrimaryLayout>
        
    )
}