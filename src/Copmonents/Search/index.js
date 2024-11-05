import axios from "axios"
import { useEffect, useState } from "react"
import { AutoComplete } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Search(){
    const [option,setOption]=useState([])
    function type(e){
     axios
     .get("https://api.coincap.io/v2/assets")
     .then(function(responce){
    
        let myOptions = responce.data.data.map(function(item){
            return {
                label:item.name,
                value:item.name
            }
        })
        setOption(myOptions)
     })    
     .catch(function(error){})           
        }

    return (
        <div className="search">
            {/* <Link to={`/assets/${id}`}> */}
            <AutoComplete
                style={{
                width: 100,
                }}
                onSearch={type}
                options={option}
                placeholder="Search ..."
                allowClear
            />
{/* </Link> */}
       </div>           
    )
}