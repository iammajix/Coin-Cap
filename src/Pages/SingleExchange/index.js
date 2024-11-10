import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Copmonents/Layout/PrimaryLayout";
import { Spin } from 'antd'
import "./style.css";
import Charts from "../../Copmonents/Charts";



export default function SingleExchange (){
    const {exchangedetail}=useParams();
    const [data,setData]=useState({
      data:{},
      
    });
    
    const [loading ,setLoading]=useState(false);
    useEffect (function (){
        setLoading(true);
        axios 
        .get(`https://api.coincap.io/v2/exchanges/${exchangedetail}`)
        .then(function(response){
            setData(response.data);
            setLoading(false);
        })
        .catch(function(erorr){
          setLoading(false);
        })
        
    },{exchangedetail});
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
            
             <div className="ex-item">
              <div className="container">
                     <div className="row">
                         <div className="leftdetail flex col-4">
                             <div className="rank flag" style={{marginLeft:'8rem'}}>
                                 RANK<h1>{data.data.rank}</h1>
                             </div>
                             <div className="detail-ex ">
                                 <h1 className="name">{data.data.name}</h1>
                                 <div>
                                    <div  style={{fontSize:'2rem',padding:'1.2rem 0 0 4rem'}}>
                                  <span className="pairs">{`${parseFloat(data.data.tradingPairs).toFixed(0)}`}</span>
                                 </div>
                                 </div>
                             </div>
                         </div>
                         
                         <div className="rightdetail col-7 ">
                            <div className="row " style={{padding:'3rem 0 0 0 ',marginLeft:'21rem'}}>
                            <div className="volume ">
                            <p>Volume (24Hr)</p>
                            <h3 className="text-center" style={{fontSize:'2rem'}}>
                                ${`${parseFloat(data.data.volumeUsd).toFixed(0)}`}</h3>
                             </div>
                             <div className="volume "  style={{padding:'0 9rem 0 9rem'}}> 
                             <p>Top Pair</p>
                             <h3 className="text-center" style={{fontSize:'2rem'}}>
                                BTC/USDT</h3>
                             </div>
                         </div>
                         </div>
                         
                     </div>
                     </div>
                        <div className="bot-detail flex justify-center">
                        <div className="website button">
                            <h4>Website</h4>
                        </div>
                    </div>
            </div>


        <Charts/>
           
          </Fragment>  
    </PrimaryLayout>
)
}