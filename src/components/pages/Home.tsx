import React from "react";
import GeneralNav from "./GeneralNav";
import ToggleButton from "../ToggleButton/index";
import CardContainer from "../CardContainer/index";
import Footer from "../Footer/index";
import Main from "./main";
import { Row, Col } from "reactstrap";

import Home1 from "./Home1";

export const Home = (props: any) => {
  return (
    <div className="main-container-home">
      <GeneralNav />
      <Home1 />
      {/* <Main /> */}
      <Footer />
    </div>
  );
};

export default Home;
