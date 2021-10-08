import React from "react";
import GeneralNav from "./GeneralNav";
//import { Dapp } from "../Dapp";
import orgimg from "../pages/assets/img/orgimg.png";
import Footer from "../Footer/index";

export const Dex = (props: any) => {
  return (
    <div className="main-container-home ">
      <GeneralNav />
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed tracking-widest	font-semibold text-base">
              With Enterprise DEX, take an informed decision while trading in
              cryptos. Enterprise DEX offers P2P trading in Governance tokens of
              ORG 3.0 registered and validated with Equinox's Proof of Business
              framework. Buy, Sell, Stake, Farm cryptos & do a lot more with
              feature rich enterprise grade Decentralised Exchange.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={orgimg}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dex;
