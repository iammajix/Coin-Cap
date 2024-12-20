import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Currency from "../Helpers/curenccys";
import Language from "../Helpers/Languages";
import Search from "../Search";
import { SettingFilled } from "@ant-design/icons";

export default function Header (){
    const menu = [
        {
            name : "Coins",
            link : "",
        },
        {
            name : "Exchanges",
            link : "exchanges",
        },
        {
            name :"Contact us",
            link : "ContactUs",
        },
    ]
    function renderMenu (){
        return menu.map(function(item,index){
            const {name , link} =item;
            return (
                <li key={index}>
                    <Link to={`/${link}`}>{name}</Link>
                </li>
            );

        })
    }
    return (
        <Fragment>
            <div className="header">
                <div className="banner flex justify-center">
                <div className="row align-center">
                        <div className="ss-mark">  
                            <img src="../../images/ss-mark-white.svg"/>
                        </div>
                            <div className="ss-mark-text">
                            <a href="http://bit.ly/3ERzmEc" target="blank"><p>
                            Buy, sell, & swap your favorite assets. No KYC. No added fees. Decentralized.</p>
                            </a>
                        </div> 
                            <div className="arrow-right">   
                            <img src="../../images/arrow-right.svg"/>
                        </div>
                </div>
                </div>
            <div className="menu">    
                <div className="container">
                    <div className="row align-center">
                        <div className="col-4">
                            <div className="menu-bar ">
                                <ul className="flex align-center">{renderMenu()}</ul>
                            </div>    
                        </div>
                            <div className="col-4">
                                    <div className="logo"> 
                                        <a>
                                        <img src="../../images/black.svg"/>
                                        </a>
                                        </div>
                            </div>
                                <div className="col-4">
                                        <div className="search flex align-center ">
                                            <ul><Currency/></ul>
                                            <ul><Language/></ul>
                                            <Search/>
                                            <SettingFilled style={{ fontSize: '1.3rem',paddingLeft:'1rem'}}/>
                                        </div>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div className="market-context p-top-15"></div>
           
        </div>

        </Fragment>
    )
}