import React from 'react';
import './landing.css';
import TradingInstruments from './tradingInstruments';
const Landing = () => {
    return (
        <>
            <div className="landingPageMain">
                <div className="landingBg">
                    {/* <img className="landingBg1" src="../assets/lado.png" alt="" /> */}
                    <img className="landingBg2" src="https://i.pinimg.com/736x/d1/42/8d/d1428dadf341252994ccca5487158cfc.jpg" alt="" />
                    {/* <img className="landingBg3" src="../assets/bg4.jpg" alt="" /> */}
                    <div className="landingMsgContainer">
                            <h1 className="landingMsg">
                            WELCOME TO THE WORLD OF STOCK MARKET <span className="landingDomainName"></span>
                            </h1>
                    </div>
                </div>
                <TradingInstruments/>

            </div>
        </>
    );
};
export default Landing;