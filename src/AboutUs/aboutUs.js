import React from "react";
import Navbar from "../Navbar/Navbar";
import './aboutUs.css';
const AboutUs = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="AboutMain">
                {/* <img className="landingBg1" src="../assets/bg4.jpg" alt="" /> */}
                {/* <img className="landingBg2" src="https://t3.ftcdn.net/jpg/02/34/60/16/240_F_234601686_hDxMeDtngV15G49S8nCSkwAR8DSwGgvn.jpg" alt="" /> */}
                <div className="aboutContainer">
                    <div className="aboutFlexContainer">
                        <div className="aboutHeadingContainer">
                            <h1>Our Vision</h1>
                        </div>
                        <div className="aboutParagraph">
                            <p>NSE Group has been constantly working to improve the financial wellbeing of people at large through a committed approach to offer investment products that suits varied needs of people. It has improved access to financial markets for people across the country by introducing transparent and efficient systems, improved safety measures for investors, empowering investors through awareness and education on financial planning, investor protection and investment related issues. Besides this, NSE Group has continuously endeavoured to integrate sus to create a system that benefits both businesses and investors, while promoting economic growth and stability. This is achieved through transparent and efficient markets, effective regulation, and a commitment to long-term value creation. The stock market is a platform for buying and selling shares of publicly traded companies. It plays a critical role in the global economy by providing businesses with access to capital and investors with opportunities to grow their wealth.

The stock market can be volatile, with prices constantly fluctuating based on a variety of factors such as economic indicators, company performance, geopolitical events, and investor sentiment. While it can offer the potential for high returns, it also involves significant risk, and investors must carefully evaluate their investment decisions.





</p>
                        </div>
                        <div className="aboutServicesHeading">
                            <h1>Our Services :</h1>
                        </div>
                        <div className="aboutServicesPara">
                            <p>Registered with Central Depository Service (India) Ltd (CDSL), the depository arm of Suresh Rathi offers various Depository Services to its clients. State of the art technology ensures that our Depository is always convenient, dependable, and secure for any entity involved with the depository. 
Our customer-centric account schemes have been designed keeping in mind the investment psyche of our clients. Your DP account with us takes care of your Depository needs like dematerialization, rematerialisation and pledging of shares. 
Clients are also offered with ‘easi’ which allows them to access the demat account through internet. Inforproducts, which allow investors to track the performance of a group of stocks. Index products can be used as a benchmark for portfolio performance or as the basis for investment strategies.

Overall, the stock market plays a critical role in the global economy by providing a platform for capital raising, trading, price discovery, transparency, and indexing. These services benefit investors, companies, and the broader economy by promoting growth, innovation, and stability.





</p>
                        </div>
                      
                    </div>

                </div>
            </div>
        </>
    )
}
export default AboutUs;