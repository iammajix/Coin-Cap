import "./style.css";

export default function TotalMarket (){
    const marketTotal = [
        {
            name : "MARKETCAP",
            value : "$3.05T",
        },
        {
            name : "EXCHANGEVOL",
            value : "$35.87B",
        },
        {
            name : "ASSETS",
            value : "2,301",
        },
        {
            name : "EXCHANGES",
            value : "117",
        },
        {
            name : "MARKETS",
            value : "5,868",
        },
        {
            name : "BTCDOMINDEX",
            value : "43.8%",
        },
    ]
    
    function renderTotal (){//-------------total market------------------>
        return marketTotal.map(function(items,index){
            const {name , value} =items;
            return (
            <li key={index}> 
            <div className="total-market ">
                <div className="row text-center"> 
                        <div className="col-12">
                            <span  
                        style={{ fontSize: '1.4rem',color:'#ffffff',paddingLeft:'6rem'}}>
                            {name}
                            </span>
                        </div>
                        <div  className="col-12 p-top-15">
                        <span 
                        style={{ fontSize: '2.1rem',color:'#ffffff',paddingLeft:'6rem'}}>
                            {value}
                            </span>
                        </div>    
                </div>
            </div>
            </li>
            )
        })
    }
    return (
        <div className="market-context p-top-15">
        <div className="container"> 
        <div className="row align-center">
                <div className="col-2 space-between">
                    <div className="total">
                        <ul className="flex">{renderTotal()}</ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
    )
}