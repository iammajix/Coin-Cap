import axios from "axios"
import { useEffect, useState } from "react"
import { AutoComplete } from 'antd';
import { Link } from "react-router-dom";

export default function Language(){
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
        <div className="language">
            <AutoComplete
                style={{
                width: 70,
                }}
                onSearch={type}
                options={option}
                placeholder="English"
                allowClear
                variant="borderless"
            />
       </div>           
    )
}