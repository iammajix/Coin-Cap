import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../Pages/HomePage";
import Exchanges from "../../Pages/Exchanges";
import ContactUs from "../../Pages/ContactUs";
import Coin from "../../Pages/Coin";

export default function MyRouter (){
    const routes = createBrowserRouter ([
        {
            path : "/",
            element : <Homepage/>,
        },
        {
            path : "exchanges",
            element : <Exchanges/>,
        },
        {
            path : "contact",
            element : <ContactUs/>,
        },
        {
            path : "/assets/:coindetail",
            element : <Coin/>,
        },
    ])
    return <RouterProvider router={routes}/>
}