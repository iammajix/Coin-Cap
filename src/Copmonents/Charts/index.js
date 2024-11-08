import { Cchart } from "../Charts/Data.js";
import { useState } from "react";
import { LineChart } from "../Charts/LineChart.js";


export  default function Appc() {
  const [data, setData] = useState({
    labels:
    Cchart.map(function(data){
      return (
        data.period
      )
     }), 
    datasets: [
      {
        label: "Price",
        data:
        Cchart.map(function(data){
          return (
            data.open,
            data.close
          )
        }),
        backgroundColor: "rgba(24, 198, 131)",
        
      },
    ],
  });

  return (
    <>
      <div className="container ">
        <div>
          <LineChart chartData={data} />
        </div>

      </div>
    </>
  );
}
