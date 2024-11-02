import "./style.css";
import { TwitterOutlined,FacebookFilled } from "@ant-design/icons";

export default function Footer (){
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                         <ul>
                            <li><h3 className="mb-15">COINCAP.IO</h3></li>
                            <li><a href="/exchange">Methodology</a></li>
                            <li><a href="/Support">Support</a></li>
                            <li><a href="/api">Our API</a></li>
                            <li><a href="/Careers">Careers</a></li>
                        </ul>
                        </div>
                        <div className="col-3">
                         <ul>
                            <li><h3 className="mb-15">LEGALS</h3></li>
                            <li><a href="/exchange">Terms of Service</a></li>
                            <li><a href="/Support">Privacy Policy</a></li>
                            <li><h3 className="caption">DISCLAIMER</h3></li>
                            <li><p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.
                            </p></li>
                        </ul>
                        </div>
                        <div className="col-3">
                        <ul>
                            <li><h3 className="mb-15">FOLLOW US</h3></li>
                            <TwitterOutlined style={{ fontSize: '2.3rem',paddingRight:'1rem',opacity:'0.8'}} />  
                            <FacebookFilled style={{ fontSize: '2.3rem',opacity:'0.8'}}/>
                        </ul>
                        </div>
                        <div className="col-3">
                         <ul>
                            <li><h3 className="mb-15">COINCAP APP AVAILABLE ON</h3></li>
                            <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap" target="_blank">
                            <img src="../../images/google_play.svg" /></a>
                            <a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&amp;ign-mpt=uo%3D4" target="_blank">
                            <img src="../../images/apple_store.svg"/></a>
                        </ul>
                        </div>
            </div>
            </div>
        </div>
    )
}