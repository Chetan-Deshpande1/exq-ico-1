import React from "react";
import GeneralNav from "./GeneralNav";
//import { Dapp } from "../Dapp";
import deximg from "../pages/assets/img/deximg.png";
import Footer from "../Footer/index";

export const Dex = (props: any) => {
  return (
    <div className="main-container-home ">
      <GeneralNav />
      <section className="text-gray-600 body-font">
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
              src={deximg}
            />
          </div>
        </div>
      </section>
      {/* <div>
        <div className="grid grid-cols-2">
          <div className="">
            <img src={deximg} />
          </div>

          <div className="  text-center sm:text-left  px-8 py-56 p-12 tracking-widest	font-semibold text-base	">
          
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Dex;
