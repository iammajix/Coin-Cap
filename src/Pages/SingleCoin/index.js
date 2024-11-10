import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";
import { Button,Flex, Spin } from 'antd'
import { pageTitle } from "../../Copmonents/Helpers/Title/TitleMaker";
import "./style.css";
import TotalMarket from "../../Copmonents/Helpers/TotalMarket";
import Chart from "../../Copmonents/Chart";
import Charts from "../../Copmonents/Charts";



export default function SingleCoin (){
    const {coindetail}=useParams();
    const [data,setData]=useState({
      data:{},

    });
    const [loading ,setLoading]=useState(false);
    useEffect (function (){
        setLoading(true);
        axios 
        .get(`https://api.coincap.io/v2/assets/${coindetail}`)
        .then(function(response){
            setData(response.data);
            setLoading(false);
        })
        .catch(function(erorr){
          setLoading(false);
        })
        
    },{coindetail});
    useEffect (function(){
        pageTitle("Coins")
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
return (
   <PrimaryLayout>
     <Spin spinning={loading} size={"large"} fullscreen/>
          <Fragment>
             <div className="coin-item">
              <div className="container">
                     <div className="row">
                         <div className="leftdetail flex col-4">
                             <div className="rank flag">
                                 RANK<h1>{data.data.rank}</h1>
                             </div>
                             <div className="detailcoin ">
                                 <h1 className="name">{data.data.name}({data.data.symbol})</h1>
                                 <div>
                                    <div  style={{fontSize:'2rem',padding:'1.2rem 0 0 1rem'}}>
                                  <span className="price">${`${parseFloat(data.data.priceUsd).toFixed(2)}`}</span>
                                 <span className="change">{`${parseFloat(data.data.changePercent24Hr).toFixed(2)}`}%</span>
                                 </div>
                                 </div>
                             </div>
                         </div>
                         
                         <div className="rightdetail col-7 ">
                            <div className="row " style={{padding:'2rem 0 0 0 ',marginLeft:'15rem'}}>
                            <div className="marketcap ">
                            <p>Market Cap</p>
                            <h3 className="text-center" style={{fontSize:'2rem'}}>
                                ${`${parseFloat(data.data.marketCapUsd/1000000000000).toFixed(2)}`}t</h3>
                             </div>
                             <div className="volume "  style={{padding:'0 9rem 0 9rem'}}> 
                             <p>Volume (24Hr)</p>
                             <h3 className="text-center" style={{fontSize:'2rem'}}>
                                ${`${parseFloat(data.data.volumeUsd24Hr/1000000000).toFixed(2)}`}</h3>
                             </div>
                             <div  className="supply " >
                             <p>Supply</p>
                            <h3 className="text-center" style={{fontSize:'2rem'}}>
                                {`${parseFloat(data.data.supply/1000000).toFixed(2)}`}</h3>
                            </div>
                         </div>
                         </div>
                         
                     </div>
                     </div>
                        <div className="bot-detail flex justify-center">
                        <div className="website button">
                            <h4>Website</h4>
                        </div>
                    <div className="explorer button">
                            <h4>Explorer</h4>
                        </div>
                    </div>
            </div>

          <div className="coin-detail"> 
                <div className="container">
                    <div className="row p-top-40">
                        <div className="title flex col-6">
                            <div className="coin-name" style={{paddingLeft:'15rem',fontSize:'1rem'}}>
                                <div className="icon">
                                {/* <img className="icon" src={`https://assets.coincap.io/assets/icons/${data.data.symbol.toLowerCase()}@2x.png`}/> */}
                            </div>
                                 <h2 className="name">{data.data.name}({data.data.symbol})</h2>
                                 <p className="date" style={{fontSize:'1.2rem',paddingTop:'3rem'}}>{data.timestamp}</p>
                            </div>
                            <div className="low-high " style={{paddingLeft:'30rem'}}>
                                <div className="high flex" style={{paddingBottom:'3rem'}}>
                                    <span style={{fontSize:'1.4rem',fontWeight:'700',opacity:'0.5',paddingRight:'2rem'}}>HIGHT</span>
                                    <h2>$69,357.53</h2>
                                </div>
                                <div className="low flex" >
                                    <span style={{fontSize:'1.5rem',fontWeight:'700',opacity:'0.5',paddingRight:'2.2rem'}}>LOW</span>
                                    <h2>$67,490.64</h2>
                                </div>
                            </div>
                            <div className="ave-chg " style={{paddingLeft:'15rem'}}>
                                <div className="average flex" style={{paddingBottom:'3rem'}}>
                                    <span style={{fontSize:'1.4rem',fontWeight:'700',opacity:'0.5',paddingRight:'2rem'}}>AVERAGE</span>
                                    <h2>$68,757.53</h2>
                                </div>
                                <div className="change flex">
                                    <span style={{fontSize:'1.4rem',fontWeight:'700',opacity:'0.5',paddingRight:'2rem'}}>CHANGE</span>
                                    <h2>-0.67%</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                                  
                </div>
            </div>
        <Charts/>
           
          </Fragment>  
    </PrimaryLayout>
)
}