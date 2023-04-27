import React, { useContext } from "react";
import axios from "axios";
/* import components */
import { Loader } from "../../components";
import { PricesContext } from "../../context/PricesAPI";
/* import lib */
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
/* icons */
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import {
  AiOutlineCheckCircle,
  AiOutlineDownload,
  AiOutlineUpload,
} from "react-icons/ai";

/* import Asset */
import gradientColor from "../../assets/PNG/bg/gradientColor.png";
import EthIcon from "../../assets/PNG/icons/ethereum-eth-logo.png";
import { EtherSymbol } from "ethers";
import { TransactionContext } from "../../context/TransactionContext";
import { ErrorContext } from "../../context/ErrorContext";
import { GrAdd } from "react-icons/gr";
/* JSX */
export default function transaction() {
  //Default Styling
  const cardinput = `  max-w-[400px] lg:min-w-[550px]   sm:min-w-[70%] relative lg:min-h-[500px] p-[25px] `;
  //states

  const [TransactionClass, setTransactionClass] = React.useState(``);
  const [goAhead, setgoAhead] = React.useState(false);
  const [showSave, setshowSave] = React.useState({
    CurrentValue: "",
    focus: false,
    show: false,
    addressIndex: 0,
  });
  //Ref
  const Address = React.useRef(null);
  // intersecion
  const [inputRef, inputInView] = useInView({});
  const [card, cardInView] = useInView();
  // context
  const { Prices } = React.useContext(PricesContext);

  const { error, setError } = React.useContext(ErrorContext);
  const {
    connectWallet,
    currentAccount,
    form,
    setForm,
    handleChange,
    sendTransactions,
    TransactionStatus,
    addressTo,
  } = useContext(TransactionContext);
  //functions

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = true;
    const { addressTo, amount, keyword, message } = form;
    Object.entries(form).map((x) => {
      if (!x[1] || !currentAccount) {
        success = false;
        return setError({
          ...error,
          type: "mid",
          name: !x[1]
            ? "missing_inputs"
            : !currentAccount
            ? `not connected`
            : null,
          message: !x[1]
            ? `please fill the  ${x[0]} input to continue `
            : !currentAccount
            ? `Please connect your metamask Account to continue`
            : null,
        });
      }
    });
    success && sendTransactions();
  };
  const savedAddress = () => {
    //Unique Address's
    const uniqueAddress = Array.from(
      new Set(...[JSON.parse(localStorage?.data).map((x) => x?.to)])
    );
    setshowSave((current) => ({
      ...current,
      focus: true,
      show: showSave.show ? false : true,
    }));
    if (Address.current) {
      if (showSave.show) {
        Address.current.value = uniqueAddress[showSave.addressIndex];
        Address.current.value = Address.current.value;
      } else {
        Address.current.value = showSave.CurrentValue;
        Address.current.value = Address.current.value;
      }
    }
  };
  //Memorizing the Prices Data
  const Cryptoprices = React.useMemo(() => Prices, [Prices]);

  //Effects
  React.useEffect(() => {
    setshowSave((current) => ({ ...current, CurrentValue: form.addressTo }));
  }, [form.addressTo]);
  React.useEffect(() => {
    const { isSending, Sent, Failed } = TransactionStatus;
    if (isSending) {
      setTransactionClass(`isSending`);
    } else if (!isSending) {
      if (Sent) {
        setTransactionClass(`Sent`);
      } else if (Failed) {
        setTransactionClass(`NotSent`);
      }
    }
    const clearClass = setTimeout(() => {
      if (!isSending) {
        if (Sent || Failed) {
          setTransactionClass("");
          if (Sent) {
            setForm((current) => Object.keys(current).map((x) => (x = "")));
          }
        }
      }
    }, 6000);
    return () => {
      clearInterval(clearClass);
    };
  }, [TransactionStatus]);

  /* RETURN  */
  return (
    <Element name="TransactionSection">
      <div
        className={`lg:min-h-[500px] sm:my-[160px] min-h-[300px]  my-[100px] flex flex-wrap items-center justify-center  `}
      >
        <div
          className={`lg:hidden pricesWidget group flex items-center justify-around cursor-pointer bg-white w-[65px] hover:w-[180px] z-[100]  p-4 right-[20px] group hover:overflow-hidden`}
        >
          <GiPriceTag
            fill={"black"}
            size={28}
            className={` group-hover:absolute group-hover:w-[120px] group-hover:h-auto group-hover:opacity-[0.2]`}
          />
          <div
            className={`group-hover:relative group-hover:opacity-[1] opacity-0 hidden  `}
          >
            {
              <React.Suspense
                fallback={<Loader content={`crypto usd prices`} />}
              >
                {Cryptoprices?.data.slice(0, 4).map((pr) => {
                  <>{pr.name}</>;
                })}
              </React.Suspense>
            }
          </div>
        </div>
        {/* transaction cardSection */}
        <div
          className={`items-center   justify-center flex flex-col  ${cardinput} `}
        >
          <div
            id="card"
            ref={card}
            className={`max-h-[220px] ${
              (cardInView && "placeholder-opacity-100") || "opacity-0"
            } transition-opacity hover:opacity-80 bg-[50%] duration-700 backdrop-blur-lg  rounded-[10px] min-h-[200px] max-w-[420px] min-w-[380px] lg:min-w-[70%] CardgradientBG flex items-start  justify-center flex-col relative `}
          >
            <h2
              style={{ letterSpacing: "6px" }}
              className={`uppercase  absolute top-0 font-[Spartan] translate-y-[-50%] text-white m-auto   flex items-start self-center text-[25px] lg:text-[30px]`}
            >
              Transaction
            </h2>
            <div
              className={`flex justify-center items-start flex-col min-h-[170px]  translate-y-[15px] w-full gap-[5px] text-gray-300 font-[Raleway] text-[14px] `}
            >
              <div className="gap-y-5px">
                {" "}
                <p
                  className={`  transition-all ml-[8px] cursor-pointer hover:text-white`}
                >
                  name :
                </p>
              </div>
              <div>
                {" "}
                <p
                  className={` transition-all ml-[8px] cursor-pointer hover:text-white `}
                >
                  address :
                </p>
              </div>
            </div>
            <img
              src={EthIcon}
              className={`lg:w-[50px] w-[45px] h-auto self-end translate-y-[-15px] my-3 mx-3  rounded-full  `}
            />
          </div>
          {/* BUTTON */}
          <div
            onClick={
              currentAccount
                ? () => {
                    setgoAhead(true);
                    const hide = setTimeout(() => setgoAhead(false), 3000);
                    return () => {
                      clearTimeout(hide);
                    };
                  }
                : connectWallet
            }
            className={` overflow-hidden flex items-center justify-center lg:min-w-[340px] font-[raleway] max-w-[420px] min-w-[380px] border backdrop-blur-lg transition-all duration-500  my-[18px] py-[6px] bg-opacity-[0.3] min-h-[35px] lg:rounded-[10px] rounded-full cursor-pointer TransactionsButton text-gray-300  ${
              currentAccount
                ? `bg-green-300 hover:bg-opacity-[0.4] text-gray-500`
                : "bg-black hover:bg-gray-800"
            }`}
          >
            <p
              className={` ${
                goAhead
                  ? `opacity-0 `
                  : `opacity-[1] transition-opacity duration-[1000ms] delay-[400ms]`
              }`}
            >
              {currentAccount ? `wallet is connected` : `connect wallet`}
            </p>
            <div
              className={`absolute top-0  h-full w-full flex items-center justify-center z-[10] backdrop-blur-lg   bg-opacity-[0.3]  font-[Raleway] transition-opacity duration-150 delay-0 ${
                currentAccount ? `flex` : "hidden"
              } ${goAhead ? `bg-opacity-[1] ` : `bg-opacity-[0]`}`}
            >
              <p
                style={{
                  transition: `transform 300ms 0ms ease-in-out`,
                }}
                className={goAhead ? `translate-y-[0%]` : `translate-y-[-120%]`}
              >
                start making transactions
              </p>
              <AiOutlineCheckCircle
                style={{
                  transition: `transform 300ms 300ms ease-in-out`,
                }}
                size={25}
                className={`translate-x-[50px] ${
                  goAhead ? `translate-y-[0%]` : `translate-y-[-120%]`
                }`}
              />
            </div>
          </div>
          <div id="price" className={`mt-[15px]  lg:flex hidden p-[5px]`}>
            {!Cryptoprices?.data ? (
              <Loader content={`current cryptos value`} />
            ) : (
              <div className={``}>
                {Cryptoprices?.data?.slice(0, 2).map((coin, index) => (
                  <div
                    key={coin.name}
                    className={`flex gap-[5px]  justify-between min-w-[180px] font-[raleway] text-[14px]  text-gray-400  lg:min-w-[300px]`}
                  >
                    <div>
                      {!index && (
                        <h3
                          className={`uppercase font-[openSauce] text-[14px]`}
                        >
                          crypto
                        </h3>
                      )}
                      <p className={`my-2`}>{coin.name}</p>
                    </div>
                    <div>
                      {!index && (
                        <h3
                          className={`uppercase font-[openSauce] text-[14px]`}
                        >
                          price
                        </h3>
                      )}
                      <p className={`my-2`}>
                        {coin.metrics.all_time_high.price.toFixed(5)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <hr
          style={{
            scale: cardInView ? "1 1" : "1 0",
            transformOrigin: "top",
            transition: `scale 1000ms ease-in-out`,
          }}
          className={` bg-gradient-to-r from-indigo-500 mx-[15px] lg:flex hidden min-h-[280px] w-[2px]`}
        />
        {/* inputs */}
        <div
          className={`flex-col  gap-y-[50px] flex   items-center justify-center py-5  ${cardinput}`}
        >
          <div className={`w-full flex justify-between `}>
            <div className={`flex justify-center  w-full items-center`}>
              <FaEthereum size={20} />
              <h3 className={`font-[raleway]  mx-5 `}>
                fill in the inputs below to continue the transaction{" "}
              </h3>
            </div>
          </div>

          <div
            ref={inputRef}
            className={`gap-[25px]  flex flex-col w-full items-center justify-center `}
          >
            {[
              { placeHolder: "address to", name: "addressTo" },
              { placeHolder: "Amount", name: "amount" },
              { placeHolder: "keyword", name: "keyword" },
              { placeHolder: "Message", name: "message" },
            ].map(({ placeHolder, name }, index) => (
              <div
                key={`transactionInputs${index}`}
                className={`w-full flex items-center justify-center relative `}
              >
                {/* use address from history function */}
                {(() => {
                  return (
                    placeHolder === "address to" && (
                      <div
                        onClick={savedAddress}
                        style={{
                          transition: `opacity 200ms ease-in-out`,
                        }}
                        className={`w-[30px]  h-[30px] absolute lg:left-0 right-0 translate-x-[-8px] cursor-pointer flex items-center justify-center p-[6px] rounded-full border group `}
                      >
                        <AiOutlineUpload className={` group`} />
                        <div
                          className={`group-hover:opacity-[1] opacity-[1] flex items-center justify-center absolute scale-x-0 group-hover:scale-x-[1] transition-transform duration-200 ease-linear delay-[150ms] text-[11px] font-[Raleway] break-before-all text-gray-800 lg:translate-y-0 translate-y-[32px] translate-x-[32px] p-[4px] rounded-[2px] w-[150px] origin-left pointer-events-none ${
                            JSON.parse(localStorage?.data)?.length
                              ? `bg-green-300`
                              : `bg-orange-300`
                          }`}
                        >
                          <p
                            className={`opacity-0 group-hover:opacity-[1] transition-opacity delay-[350ms] `}
                          >
                            {JSON.parse(localStorage?.data)?.length
                              ? `select an address from your transaction history`
                              : `no transaction history found  `}
                          </p>
                        </div>
                      </div>
                    )
                  );
                })()}
                <input
                  ref={!index ? Address : null}
                  onKeyDown={
                    placeHolder === "address to" && showSave.focus
                      ? (e) => {
                          let dataLength = uniqueAddress.length;
                          switch (e.key) {
                            case `ArrowUp`:
                              return () => {
                                e.preventDefault();
                                setshowSave((cur) => ({
                                  ...cur,
                                  addressIndex:
                                    showSave.addressIndex < dataLength
                                      ? showSave.addressIndex + 1
                                      : 0,
                                }));
                              };
                            case "ArrowDown":
                              return () => {
                                e.preventDefault();
                                setshowSave((cur) => ({
                                  ...cur,
                                  addressIndex:
                                    showSave.addressIndex < dataLength
                                      ? showSave.addressIndex - 1
                                      : 0,
                                }));
                              };
                          }
                        }
                      : null
                  }
                  onFocus={
                    placeHolder === "address to"
                      ? () => {
                          setshowSave((current) => ({
                            ...current,
                            focus: true,
                          }));
                        }
                      : null
                  }
                  onBlur={
                    placeHolder === "address to"
                      ? () => {
                          setshowSave((current) => ({
                            ...current,
                            focus: false,
                          }));
                        }
                      : null
                  }
                  name={name}
                  onChange={(e) => handleChange(e, name)}
                  key={index}
                  style={{
                    translate: inputInView ? "0 0" : "200px 0",
                    opacity: inputInView ? 1 : 0,
                    transition: `translate ${index * 500}ms , opacity ${
                      index * 200
                    }ms ease-in`,
                  }}
                  placeholder={placeHolder}
                  className={`max-w-[350px] w-[80%] bg-transparent morphism py-[8px] text-gray-300  px-[17px] rounded-[20px] outline-none  font-[raleway] `}
                />
                {placeHolder.toLowerCase().includes(`address`) && (
                  <div
                    className={` ${
                      JSON.parse(localStorage?.data).some(
                        (x) => x === form.addressTo
                      )
                        ? `isSaved`
                        : `hidden`
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className={`w-[80%] max-w-[350px]  font-[openSauce] py-[5px] lg:translate-y-[-15px] border text-[15px] TransactionsButton overflow-hidden my-[30px] px-5 rounded-full translate-y-[-10%] ${TransactionClass}`}
          >
            {(() => {
              const { isSending, Sent, Failed } = TransactionStatus;
              let again = false;
              let dot = "";
              const Dots = setInterval(() => {
                if (dot.length >= 3) {
                  return (dot = "");
                } else {
                  return (dot += ".");
                }
                if (!isSending) clearInterval(Dots);
              }, 1000);
              if (TransactionClass.length) {
                again = true;
                if (isSending) {
                  return `sending ${dot}`;
                } else if (!isSending) {
                  if (Sent) {
                    return `Sent`;
                  } else if (Failed) {
                    return `Failed`;
                  }
                }
                if (Sent || Failed) {
                  const clearClass = setTimeout(
                    () => setTransactionClass(``),
                    8000
                  );
                  return clearTimeout(clearClass);
                }
                if (!TransactionClass.length && again) {
                  return `start new Transaction `;
                }
              }
            })() || `start Transaction`}
          </button>
        </div>
      </div>
    </Element>
  );
}
