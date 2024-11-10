import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../Pages/HomePage";
import Exchanges from "../../Pages/Exchanges";
import ContactUs from "../../Pages/ContactUs";
import SingleExchange from "../../Pages/SingleExchange";
import SingleCoin from "../../Pages/SingleCoin";

export default function MyRouter (){
    const routes = createBrowserRouter ([
        {
            path : "/",
            element : <Homepage/>,
        },
        {
            path : "/exchanges",
            element : <Exchanges/>,
        },
        {
            path : "/contactus",
            element : <ContactUs/>,
        },
        {
            path : "/assets/:coindetail",
            element : <SingleCoin/>,
        },
        {
            path : "/exchanges/:exchangedetail",
            element : <SingleExchange/>,
        },
        {
            path: "*", 
            element: <div style={{fontSize:'5rem',position:'absolute', left:'40%',top:'45%'}}>Page Not Found</div>,
        },
    ]);
    return <RouterProvider router={routes}/>
}