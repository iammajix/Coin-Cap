import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";
import { Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Button,Flex, Spin } from 'antd'
import { Pagination } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import "./style.css";



export default function CoinsList(){ 
    const [offset,setOffset]=useState(0)
    const [loading ,setLoading]=useState(false);
    const [data,setData]=useState ([]);  
    const LIMIT=20
    useEffect(function(){
        setLoading(true);
        axios
        .get(`https://api.coincap.io/v2/assets/?offset=${offset}&limit=${LIMIT}`)
        .then(function(responce){
            setData (responce.data.data);
            setOffset(offset+LIMIT)
            setLoading(false);
        })
        .catch(function(erorr){
            setLoading(false);
        });
    },[]);
function viweMore(){
    console.log(data)
    
    setLoading(true);
        axios
        .get(`https://api.coincap.io/v2/assets/?offset=${offset}&limit=${LIMIT}`)
        .then(function(responce){
            setData ([...data,...responce.data.data]);
            setOffset(offset+LIMIT)
            setLoading(false);
        })
        .catch(function(erorr){
            setLoading(false);
        });
}

    function math (value){ //<--------------math-------------->
        let coinvalue=0;
        value=parseFloat(value);
        if (value>999){
            coinvalue = value/1000;
    }else if (value>999999){
        coinvalue = value/1000000;
    }else if (value>999999999){
        coinvalue = value/1000000000;
    }else if    (value>999999999999){
        coinvalue = value/1000000000000;
    }

     return coinvalue.toFixed(2);
    }
function symbolCurrency (value){
    let Currency ="";
    if (value>=1000 && value<1000000){
        Currency="K"
    }else if (value>=1000000 && value<1000000000){
        Currency="m"
    }else if (value>=1000000000 && value<1000000000000){
        Currency="b"
    }
    return Currency
}
    function renderFarm (){//----------------coins list------------------->
        
        return data.map(function(
            {id,rank,name,symbol="",priceUsd,marketCapUsd,vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr}){
        return (      
            <li className="align-center" key={id}>
                <div>
                  <span className="rank col-4">{rank}</span>  
                </div>
                <div className="name items-pad text-center">
                    <img className="icon" src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}/>
                   </div>
                    <div className="coin-name  col-7">
                        <a>{name}</a> 
                        <span className="symbol col-12">{symbol}</span>
                    </div>
                <div className="price items-pad text-center col-4">
                 <span>${`${parseFloat(priceUsd).toFixed(2)}`}</span>  
                </div>
                <div className="marketcap items-pad text-center col-4">
                  <span>{symbolCurrency()}{math(marketCapUsd)}</span>
                </div>
                <div className="vwap items-pad text-center col-4">
                 <span>${`${parseFloat(vwap24Hr).toFixed(2)}`}</span>   
                </div>
                <div className="supply items-pad text-center col-4">
                  <span>{`${parseFloat(supply/1000000).toFixed(2)}`}m</span>  
                </div>
                <div className="volume items-pad text-center col-4">
                  <span>${`${parseFloat(volumeUsd24Hr/1000000000).toFixed(2)}`}b</span>  
                </div>
                <div className="ch-price items-pad text-center col-4">
                 <span>{`${parseFloat(changePercent24Hr).toFixed(2)}`}</span>   
                </div>
            </li>
        );
        
        });
       
    }
        function changPage (page,pageSize){//---------------pagination---------------->
                axios
                .get(`https://api.coincap.io/v2/assets/pages=${pageSize}`)
                .then(function(responce){
                    setData (responce.data);
                })
                .catch(function(erorr){
    
                });
        }
    const [loadings, setLoadings] = useState([]);//<----------viwe more button---------->
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
  
    return (
        <PrimaryLayout>
            <Spin spinning={loading} size={"large"} fullscreen/>
        <Fragment>   
            <div className="list">
                <div className="container">
                    <div className="row p-top-70">
                        <div className="title col-12">
                            <ul className=" flex">
                                <li className="title-rank"><h3>Rank</h3></li>
                                <li className="title-name"><h3>Name</h3></li>
                                <li className="title-price"><h3>Price</h3></li>
                                <li className="title-marketcap"><h3>Market Cap</h3></li>
                                <li className="title-vwap"><h3>VWAP (24Hr)</h3></li>
                                <li className="title-supply"><h3>Supply</h3></li>
                                <li className="title-volume"><h3>Volume (24Hr)</h3></li>
                                <li className="title-ch-price"><h3>Change (24Hr)</h3></li>
                            </ul>
                        </div>
                    </div>
                        <div className="items">
                            <ul>{renderFarm()}</ul>
                        </div>            
                </div>
            </div>
           
            <Flex justify="center">
            <Button
                type="primary"
                loading={loadings[1]}
                onClick={() => viweMore(1)}
                shape="round"
                >
                Viwe More
            </Button>
            </Flex>
        </Fragment>

    </PrimaryLayout>
    )
}