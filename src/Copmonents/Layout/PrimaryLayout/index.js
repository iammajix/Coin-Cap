import { Fragment } from "react";
import Footer from "../../Footer";
import Header from "../../Header";

export default function PrimaryLayout (props){
    const {children} = props ;
    return (
        <Fragment>
            <Header/>
            {children}
            <Footer/>
        </Fragment>
    )
}