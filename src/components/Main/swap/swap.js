import React, { useEffect, useCallback } from "react";
import { Container, Row } from "reactstrap";
import { useState } from "react";
import "./swap.scss";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Icon, Input } from "semantic-ui-react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  checkIfApproved,
  getTokenBalance,
  getEquivalentToken,
  getCurrId,
  generateRefLink,
  getCurrPrice,
  getEQXBalance,
  getCorrespondingEQX,
} from "../../../helpers/getterFunctions";
import { connect } from "react-redux";
import { approveTokens, buyToken } from "../../../helpers/setterFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountModal from "../../header/Accountmodal";
import { convertToInternationalCurrencySystem } from "../../../helpers/numberFormatter";
const options = ["USDT", "BNB", "BTC", "ETH", "BUSD"];

const Swap = (props) => {
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonName, setButtonName] = useState("BUY EQX");
  const [currTokenBal, setCurTokenBal] = useState("");
  const [refLink, setRefLink] = useState("");
  const [value, setValue] = useState({ "value": "USDT", "label": "USDT" });
  const [ref, setRef] = useState("10000");
  const [transactionOnGoing, setTransactionOnGoing] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [price, setPrice] = useState("");
  const [eqxBalance, setEqxBalance] = useState("");


  useEffect(() => {
    (async () => {
      await reset()
      await getBalance()
    })();

    // getCorrespondingEQX("100","eth")
  }, [value]);

  useEffect(() => {
    (async () => {
      await getBalance()
    })();

  }, [props.account])

  useEffect(() => {
    (async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get("id");
      let currId = await getCurrId();
      let price = await getCurrPrice();
      setPrice(price)
      console.log("id----------->", id);
      if (Number(currId) >= Number(id) && Number(id) > 10000) {
        console.log("here I am");
        localStorage.setItem("ref", id);
        setRef(id);
      }

    })();
  }, [props.account]);

  // useEffect(() => {
  //   (async () => {
  //     if (value && value.value) {
  //       let amount = await getEquivalentToken(inputAmount, value.value.toLowerCase());
  //       setOutputAmount(amount)
  //     }
  //   })()
  // }, [inputAmount, value])

  useEffect(() => {
    (async () => {
      if (props.account && props.account.account) {
        let link = await generateRefLink(props.account.account);
        console.log("ref------>", link);
        setRefLink(link);
      }
    })();
  }, [props.account]);

  useEffect(() => {
    (async () => {
      try {
        if (!value)
          return;
        if (value.value === "BNB")
          setButtonName("BUY TOKEN");
        else {
          let res = await checkAllowance();
          console.log("res--------->", res);
          if (res === true) setButtonName("BUY TOKEN");
          else setButtonName("APPROVE");
        }
      } catch (e) {
        console.log(e);
      }
    })();

  }, [value, props.account, inputAmount, transactionOnGoing]);

  const handleOutputChange = useCallback(async (e) => {
    e.preventDefault()
    e.persist()
    console.log("heeeee--------")
    if (value && value.value) {
      let _input = await getCorrespondingEQX(e.target.value, value.value.toLowerCase())
      setInputAmount(_input);
    }

  }, [value])

  // useEffect(()=>{(async()=>{
  //   if (value && value.value && outputAmount) {

  //     let _input = await getCorrespondingEQX(outputAmount, value.value.toLowerCase())
  //     setInputAmount(_input);
  //   }
  // })()

  // },[outputAmount,value])

  // useEffect(() => {
  //   (async () => {
  //     if (inputAmount && value && value.value) {
  //       console.log("false-----")
  //       let _outputAmount = await getEquivalentToken(
  //         inputAmount,
  //         value.value
  //       )
  //       setOutputAmount(
  //         _outputAmount
  //       );
  //       await getBalance();
  //       await checkAllowance();
  //     }
  //   })()
  // }, [inputAmount, value])

  const handleSelect = useCallback(async (e) => {
    try {
      console.log("selected value is -----", e);
      setValue(e);
      if (inputAmount) {
        console.log("false-----")
        let _outputAmount = await getEquivalentToken(
          inputAmount,
          e.value
        )
        setOutputAmount(
          _outputAmount
        );
        await getBalance();
        await checkAllowance();
      }
      else {
        console.log("true...")
      }
    } catch (e) {
      console.log(e);
    }
  }, [props.account, inputAmount]);

  const getBalance = async () => {
    try {
      console.log("output dropdown", typeof value.value);
      let res;
      let eqxBal;
      if (value && value.value) {
        if (props.account && props.account.account) {
          res = await getTokenBalance(
            value.value.toLowerCase(),
            props.account.account
          );
          eqxBal = await getTokenBalance("eqx", props.account.account)
        }
        setCurTokenBal(res);
        setEqxBalance(eqxBal);
        console.log("res", res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const checkAllowance = async () => {
    try {
      if (value && value.value == "BNB") return;
      if (props.account && props.account.account && value && outputAmount) {
        let res = await checkIfApproved(
          outputAmount,
          value.value.toLowerCase(),
          props.account.account
        );
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const approveToken = async () => {
    try {
      if (props.account && props.account.account && value && inputAmount) {
        setTransactionOnGoing(true);
        setIsDisabled(true);
        let res = await approveTokens(
          value.value.toLowerCase(),
          props.account.account
        );

        setIsDisabled(false);
        if (res.status == true) {
          toast.success("Transaction successful")
        } else {
          toast.error("Transaction Failed");
        }
        setTransactionOnGoing(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const purchaseToken = async () => {
    try {
      if (props.account && props.account.account && value && inputAmount) {
        setTransactionOnGoing(true)
        setIsDisabled(true);
        let _ref;
        if (ref == "") {
          _ref = 10000;
          setRef(_ref)
        }
        else
          _ref = ref;
        console.log("buy--", _ref)
        let res = await buyToken(

          inputAmount,
          _ref,
          value.value.toLowerCase(),
          props.account.account
        );

        setIsDisabled(false);
        if (res.status == true) {
          toast.success("Transaction successful");
        } else {
          toast.error("Transaction Failed");
        }
        await getBalance()
        setTransactionOnGoing(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  function copyToClipboard(e) {
    var textField = document.createElement("textarea");
    textField.innerText = refLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopySuccess("Copied!");
    toast.success("Referral Link Copied");
    console.log("refferal link is copied------->", refLink);
  }

  async function reset() {
    setInputAmount(null)
    setOutputAmount(null)
  }


  return (
    <>
      <Container className="swap" fluid="true">
        <Card className="swap__box">
          <CardHeader>
            <Col>
              <h2 className="exchange">BUY EQX</h2>
              <h6 className="exchange-title">Buy EQX Token In An Instant</h6>
            </Col>
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5" className="price-sec">1 EQX = $ {price ? price : 0}</CardTitle>
            <Row className="exchange-1">
              <Row>
                <Col lg={6} className="ex-1">
                  {/* From */}
                </Col>
                <Col lg={6} className="ex-2">
                  Balance: {eqxBalance ? convertToInternationalCurrencySystem(eqxBalance) : 0}
                </Col>
              </Row>
              <Col lg={12} className="exchange-box">
                <Input
                  label={"EQX"}
                  onChange={async (e) => {
                    if (value && value.value) {
                      setInputAmount(e.target.value);

                      let output = await getEquivalentToken(
                        e.target.value,
                        value.value.toLowerCase()
                      )
                      setOutputAmount(
                        output
                      );
                    }

                  }}
                  labelPosition="right"
                  placeholder="0.0"
                  className="token-1"
                  value={inputAmount ? inputAmount : ""}
                />
              </Col>
            </Row>
            <Icon name="arrow down" className="exchange-icon" />
            <Row className="exchange-1">
              <Row>
                <Col lg={6} className="ex-1">
                  {/* To */}
                </Col>
                <Col lg={6} className="ex-2">
                  Balance: {currTokenBal && currTokenBal ? convertToInternationalCurrencySystem(currTokenBal) : 0}
                </Col>
              </Row>
              <Col lg={12} className="exchange-box">
                <Input
                  label={
                    <Dropdown
                      defaultValue="BNB"
                      options={options}
                      onChange={handleSelect}
                      onClick={() => { reset() }}
                    />
                  }
                  value={outputAmount ? outputAmount : ""}
                  onChange={async (e) => {
                    setOutputAmount(e.target.value)
                    await handleOutputChange(e)
                  }
                  }
                  labelPosition="right"
                  placeholder="0.0"
                  className="token-1"
                />
              </Col>
            </Row>
            <Row className="exchange-1 referrer">
              <Row>
                <h5>Referred By</h5>
              </Row>
              <Col lg={12}>
                <input
                  type="text"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  className="ref-input"
                />
              </Col>
            </Row>
            {props.account ?
              <Button
                className="swap-btn"
                color="primary"
                size="lg"
                block
                onClick={() => {
                  buttonName == "APPROVE" ? approveToken() : purchaseToken();
                }}
              >
                {buttonName}
              </Button>

              : <AccountModal />}

            <Row className="ref-copy">
              <h4 className="ref-link"> Your Referral Link : </h4>
              <Row className="ref-copy--btn">
                <Col lg={8}>
                  <Input
                    onChange={(t) => {
                      copyToClipboard();
                    }}
                    type="text"
                    name="amount"
                    id="amount"
                    value={refLink ? refLink : "Bye EQX To Get Referral Bonus Link"}
                    className="ref-input"
                    onClick={copyToClipboard}
                  />
                </Col>
                <Col lg={4}>

                  {/* <Button
                    className="swap-btn"
                    onClick={() => {
                      copyToClipboard();
                    }}
                  >
                    COPY
                  </Button> */}
                </Col>
              </Row>
            </Row>
          </CardBody>
          <CardFooter>
            <b>NOTE:</b> Buy only at app.equinox.business and always ensure you are interacting with right contract address.
          </CardFooter>
        </Card>
        <ToastContainer />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};

export default connect(mapStateToProps)(Swap);
