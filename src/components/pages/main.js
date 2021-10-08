import React from "react";
//import Home from "../home";
import Swap from "../Main/swap/swap";
import Header from '../header'
import { getTokenContract } from "../../helpers/getterFunctions";
import Footer from "../Footer/index";
import GeneralNav from "./GeneralNav";

const Main = () => {
  return (
    <>
      <GeneralNav />
      <Swap />
      <Footer />
    </>
  );
};
export default Main;
