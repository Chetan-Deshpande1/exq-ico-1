import React from "react";

//import Main from "../Main/main";
import { Row, Col } from "reactstrap";
import moon from "../pages/assets/img/moon.png";
import telegram from "../pages/assets/img/telegram.png";
import twitter from "../pages/assets/img/twitter.png";
import web from "../pages/assets/img/web-link.png";
import UnicornLogo from "../assets/UNICORN FINANCE.png";
import "../../index.css";
import "../pages/home.css";
import Countdown from "../countdown/countdown";

const Home1 = (props: any) => {
  return (
    // <div>
    <div className="site-header d-flex flex-column align-items-center justify-content-between home mt-2">
      {/* <Countdown></Countdown> */}
      <Row className="home-main">
        <Col lg={2} xs={12} className="main-icon">
          <a href="https://equinox.business/" target="_blank noreferrer">
            <img src={web} className="icon"></img>
          </a>
          <a
            href="https://mobile.twitter.com/eqxforbusiness"
            target="_blank noreferrer"
          >
            <img src={twitter} className="icon"></img>
          </a>

          <a href="https://t.me/eqxcommunity" target="_blank noreferrer">
            <img src={telegram} className="icon"></img>
          </a>
        </Col>
        <Col lg={5} xs={12} className="main-heading">
          <h3 className="heading1">
            <span className="subheading2">TO GO</span>
          </h3>
          <h4 className="sub-header2">Get ready to deploy your ORG 3.0</h4>
          <p className="main-content">
            Equinox Business is bringing for the first time Enterprise DEX
            focused more on community's investment protection through wielding
            powers by holding governance tokens, built-in distribution system of
            Salaries, Dividends and paying bills through Cryptos and managing
            the entire project as a Business Enterprise using onchain project
            management and ERP modules.
          </p>
          <Row>
            <Col lg={6}>
              <a
                // href={pdf}
                href="#"
                className="btn  mt-3  main-btn1"
                target="_blank noreferrer"
              >
                WHITEPAPER V 1.0
              </a>
            </Col>
            <Col lg={6}>
              <a href="#coming-soon" className="btn  mt-3 main-btn2">
                CROWDSALE
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={5} className="bg-moon">
          <img src={moon} className="moon-img"></img>
        </Col>
      </Row>

      <Row className="home-main2" id="coming-soon">
        <Col lg={12} className="main-heading2">
          <h1 className="heading1">
            <span className="subheading1">EQX </span>
            <span className="subheading3">CROWDSALE </span>
            {/* <span className="subheading2">SOON</span> */}
          </h1>

          <p className="main-content2">
            <span className="eqx">Equinox Token Info:</span>
            Equinox with a symbol <span className="dex"> EQX </span>is a fixed
            supply BEP20 standard digital token.
            <br />
            Contract Address:{" "}
            <a
              href="https://bscscan.com/token/0xe1dba43428cc6ab2672061ee3385af09f1c85781"
              className="tech mt-3"
              target="_blank noreferrer"
            >
              <span className="address">
                0xe1dba43428cc6ab2672061ee3385af09f1c85781
              </span>
            </a>
            <br />
            Total Supply: 100 Million
            <br />
            Launch Date: 19 June 2021
            <br />
            Use cases: <br />
            1) Hold certain number of EQX to register ORG 3.0 and use Equinox's
            Ecosystem
            <br />
            2) Dividend distribution to EQX holders
            <br />
            3) Transaction fee in EQX for Equinox's Blockchain proposed to be
            launched in Version 2.0
            <br />
            Proposed supply for Crowdsale: 15 Million Only
            <br />
            Crypto assets allowed for contribution: <br />
            <span className="dex">BTC, ETH, BNB, BUSD, USDT</span>
            <br />
          </p>
        </Col>
      </Row>
    </div>
    // </div>
  );
};

export default Home1;
