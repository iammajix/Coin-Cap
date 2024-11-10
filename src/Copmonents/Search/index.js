import axios from "axios"
import { useState } from "react"
import { AutoComplete } from 'antd';
import { Link } from "react-router-dom";

export default function Search(){
    const [option,setOption]=useState([])
    function type(e){
     axios
     .get(`https://api.coincap.io/v2/assets/?search=${e}`)
     .then(function(response){
    
        let myOptions = response.data.data.map(function(item){
            return {
                label:(<Link to={`/assets/${item.id}`}>{item.name}</Link>) ,
                value:item.name
            }
        })
        setOption(myOptions)
     })    
     .catch(function(error){})           
        }

    return (
        <div className="search">
            <AutoComplete
                style={{
                width: 100,
                }}
                onSearch={type}
                options={option}
                placeholder="Search ..."
                allowClear
            />
       </div>           
    )
}