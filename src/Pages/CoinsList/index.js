import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";
import TotalMarket from "../../Copmonents/Helpers/TotalMarket";
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
    console.log(data)
    
    setLoading(true);
        axios
        .get(`https://api.coincap.io/v2/assets/?offset=${offset}&limit=${LIMIT}`)
        .then(function(response){
            setData ([...data,...response.data.data]);
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
    }else if (value>999999999999){
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
                      <Link to={`/assets/${id}`}>  
                        <a style={{ color :'#000000', fontsize: '0.8rem', opacity: '0.7;'}}>{name}</a> 
                        <span className="symbol col-12" style={{ color :'#000000', fontsize: '0.8rem', opacity: '0.7;'}}>{symbol}</span>
                      </Link> 
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