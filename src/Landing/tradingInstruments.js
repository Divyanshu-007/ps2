import React from "react";
import './tradingInstruments.css';
const TradingInstruments = () => {
    return(
        <>
            <div className="tradingInstrumentsMain">
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Stock</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>In finance, stock (also capital stock) consist of all the shares by which ownership of a corporation or company is divided.[1] (Especially in American English, the word "stocks" is also used to refer to shares.)[1][2] A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares. This typically entitles the shareholder (stockholder) to that fraction of the company's earnings, proceeds from liquidation of assets (after discharge of all senior claims such as secured and unsecured debt),[3] or</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Bond</h1>
                        
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>The bond market (also debt market or credit market) is a financial market where participants can issue new debt, known as the primary market, or buy and sell debt securities, known as the secondary market. This is usually in the form of bonds, but it may include notes, bills, and so on for public and private expenditures. The bond market has largely been dominated by the United States, which accounts for about 39% of the market. A stocks. The percentage of interest is fixed in advance. Bonds are rated by credit rating agencies such as Moody’s and Standard and Poor to help investors.</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Crypto Currency</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.[2] It is a decentralized system for verifying that the parties to a transaction have the money they claim to have, eliminating the need for traditional intermediaries, such as banks, when funds are being transferred between two entities.[3]

Iies in the traditional sense, and while vanot own shares of the stock invested in but own a piece of the fund. Furthermore, mutual funds are usually managed by fund managers in financial corporations. Once an investor purchases a fund, there is no control over what goes in or out of the fund. Therefore, there is no investment in a particular stock or bond but a combination of various assets. There is also a fee or commission to be paid.</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                
            </div>
        </>
    );
}
export default TradingInstruments;