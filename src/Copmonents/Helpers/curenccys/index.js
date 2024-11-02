import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { AutoComplete } from 'antd';
import { Link } from "react-router-dom";
import { CaretDownOutlined ,HomeOutlined} from "@ant-design/icons";

export default function Currency(){
    const [option,setOption]=useState([])
    function type(e){
     axios
     .get(`https://api.apieco.ir/exchangerates/latest?base=&symbols=${e}`)
     .then(function(responce){
    
        let myOptions = responce.data.data.map(function(item){
            return {
                label:(<Link to={`/movie/${item.id}`}>
                {item.title}
                </Link>)
                ,value:item.title}
        })
        setOption(myOptions)
     })    
     .catch(function(error){})
    // }            
        }

    return (
        <div className="currency">
            <AutoComplete
                style={{
                width: 70,
                }}
                onSearch={type}
                options={option}
                placeholder="USD"
                allowClear
                variant="borderless"
                
            />

            
            
       </div>          
    )
}