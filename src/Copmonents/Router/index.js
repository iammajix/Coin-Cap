import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../Pages/HomePage";
import Exchanges from "../../Pages/Exchanges";
import ContactUs from "../../Pages/ContactUs";

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
    ])
    return <RouterProvider router={routes}/>
}