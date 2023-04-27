import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";
//Components
import { TransactionContext } from "../context/TransactionContext";

import { Loader } from "../components";
//Asset
import DonationBox from "../assets/Videos/DonationBox.gif";
import DonationArt from "../assets/PNG/More/DonationArtwork.png";
//icons
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdBookmarkRemove } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
export default function Donate() {
  //components
  const DonationText = () => {
    return (
      <>
        <div
          className={`md:w-[80%] mt-[50px] relative w-[90%] max-w-[400px] flex items-start justify-center ml-[10px] flex-col gap-y-[5px] `}
        >
          <h2
            className={` font-[Bebas] lg:text-[50px] text-[65px]  font-semibold leading-[55px] lg:leading-[62px] tracking-[1px] select-none `}
          >
            Keep our services <b className="text-[skyblue]">FREE!</b> <br />{" "}
            Donate Today
          </h2>
          <p
            className={`font-[Raleway] w-[320px]  text-gray-300 text-[14px] select-none`}
          >
            consider donating to support our smart contract website , your
            contribution helps us continue providing you with the best service
            possible
          </p>
          {/* Buttons */}
          <div
            className={`w-full max-h-[100px] min-h-[50px] mt-[30px]  flex relative items-center justify-start `}
          >
            {/* Donation Paypal Button */}
            <DonationButton
              style={`absolute ${
                DonationProcess
                  ? `translate-x-[0px] opacity-[1]`
                  : `translate-x-[15px] opacity-[0]`
              } `}
            />
            {/* show Paypal donation Button button */}
            <button
              onClick={() => setDonationProcess(true)}
              style={{
                borderStyle: "",
                transition: `opacity 250ms , transform 320ms ease-in-out`,
              }}
              className={` ml-[13px] self-center lg:self-start relative flex items-center justify-center group  ${
                DonationProcess
                  ? `translate-x-[-25px] opacity-[0]`
                  : `translate-x-0 opacity-[1]`
              } `}
            >
              <p
                className={`font-[Raleway]
    text-[20px] w-full h-full bg-blue-500 bg-opacity-[0.7] 
text-gray-300 rounded-[50px] z-[1]
first-letter:font-semibold px-[35px] py-[1px]`}
              >
                donate
              </p>
              <div
                style={{
                  background: `linear-gradient(130deg , pink , orange , blue , purple  )`,
                }}
                className={
                  "absolute w-full h-full opacity-0 group-hover:opacity-[0.4] rounded-[50px] group-hover:scale-y-[1.08] group-hover:scale-x-[1.01] transition-opacity duration-[200ms] "
                }
              />
            </button>
          </div>
        </div>
      </>
    );
  };
  const DonationButton = ({ style }) => {
    const [amount, setAmount] = React.useState(0);
    const [donationSuccess, setdonationSuccess] = React.useState(false);
    const PaypalOptions = {
      "client-id": import.meta.env.VITE_PaypalClientID,
      currency: "USD",
      intent: "donate",
    };
    const onApprove = (data, actions) => {
      setdonationSuccess(true);
      const removeTheDonationBox = setTimeout(
        () => setshowDonationBox(false),
        8000
      );
      clearTimeout(removeTheDonationBox);
      return actions.order.capture().then((details) => {});
    };
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: amount,
            },
          },
        ],
      });
    };

    return (
      <div
        className={`min-h-max ml-[13px]  m-auto my-[4px] flex   w-full h-full  items-center justify-start flex-wrap gap-x-[15px]   ${style}`}
      >
        <div
          className={` min-w-[80px]  flex items-center justify-center relative group `}
        >
          {/* Warrning for when the Amount input is empty or not valid */}
          <p
            style={{
              transition: `opacity 200ms ease-in-out`,
            }}
            className={` absolute font-[Raleway] font-thin text-gray-300 w-max text-[13px]  translate-y-[-35px] bg-gradient-to-l  from-red-500 to-red-700 rounded-[15px] px-[15px] translate-x-[15px] pointer-events-none ${
              !amount ? `group-hover:opacity-[1] opacity-0` : "opacity-[0]"
            }`}
          >
            please select the amount you wanna donate
          </p>
          <p
            className={`
          border pointer-events-none rounded-[15px] bg-black bg-opacity-[0.3] px-[30px] font-[OpenSauce] text-gray-300 py-[3px] ${
            !amount ? ` text-gray-500` : ``
          }`}
          >
            PAYPAL
          </p>
          <PayPalScriptProvider>
            <PayPalButtons
              fundingSource="paypal"
              createOrder={createOrder}
              onApprove={onApprove}
              style={{
                layout: "vertical",
                border: `solid thin`,
                borderRadius: "4px",
                shape: "rect",
                label: "donate",
              }}
              business={`Xillas`}
            />
          </PayPalScriptProvider>
        </div>
        {/* Amount */}

        <input
          type={`number`}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Amount"
          className={`font-[Raleway] px-[10px] w-[150px] py-[3.5px] rounded-[3px] bg-opacity-[0.8] bg-gray-200 border-none focus:border-white outline-none text-gray-700 focus:bg-opacity-[0.9]  min-w-[120px]`}
        />
      </div>
    );
  };

  //context
  const { TransactionStatus } = React.useContext(TransactionContext);
  //states
  const [showExitOptions, setshowExitOptions] = React.useState(false);
  const [saved, setSaved] = React.useState(true);
  const [showDonationBox, setshowDonationBox] = React.useState(true);
  const [DonationProcess, setDonationProcess] = React.useState(false);
  const exitsOptions = [
    {
      title: `don't save this transactions`,
      icons: {
        icon: MdBookmarkRemove,
        fill: "white",
      },
      onClickFunction: {
        type: "Function",
        onClick: () => {
          const currentData = JSON.parse(localStorage?.data);
          if (currentData && Array.isArray(currentData)) {
            const newData = currentData.slice(0, currentData.length - 1);
            setSaved(false);
            LocalStorage.setItem("data", JSON.stringify(newData));
            setshowDonationBox(false);
          } else return;
        },
      },
    },
    {
      title: saved
        ? `check more Details about the transaction`
        : `check transaction history `,
      icons: {
        icon: BiMessageSquareDetail,
        fill: "white",
      },
      onClickFunction: {
        type: "Nav",
        onClick: `transactionDetails `,
      },
    },
    {
      title: saved ? `star this Transaction` : "",
      icons: {
        fill: "yellow-300",
        icon: AiOutlineStar,
      },
      onClickFunction: {
        type: "Function",
        onClick: () => {
          const currentData = JSON.parse(localStorage?.data);
          const currentInstance = currentData[currentData.length - 1];
          currentData.map((instance) => {
            if (instance === currentInstance) {
              instance.start = true;
            }
            return;
          });
          localStorage.setItem("data", JSON.stringify(currentData));
        },
      },
    },
  ];
  //useEffect
  React.useEffect(() => {
    let displayDonation;
    if (TransactionStatus?.Sent) {
      displayDonation = setTimeout(() => setshowDonationBox(true), [4000]);
    } else {
      displayDonation = setTimeout(() => {
        setshowDonationBox(false);
      }, [4000]);
    }

    return () => {
      clearTimeout(displayDonation);
    };
  }, [TransactionStatus]);

  return (
    <div
      style={{
        transition: `opacity 300ms ease-in-out`,
      }}
      className={`min-h-[380px] max-h-max w-[550px] m-auto min-w-[190px] flex md:justify-start justify-center items-center bg-gradient-to-tl from-[#ff5757] via-pink-900 to-black bg-opacity-[0.8] backdrop-blur-sm rounded-[5px] p-[15px] flex-wrap lg:overflow-visible overflow-hidden ${
        showDonationBox
          ? `opacity-[1] `
          : `opacity-0 ${setTimeout(() => `hidden`, 1500)}`
      }`}
    >
      {/* The artworks  */}
      {/* lg */}
      <img
        src={DonationArt}
        className={`absolute  hidden right-[-200px] lg:translate-y-0 translate-y-[30%] lg:right-[-210px] lg:flex  select-none scale-[1]  `}
      />
      {/* sm */}
      <img
        src={DonationBox}
        className={`absolute opacity-[0.1] lg:w-auto  border lg:translate-x-[-105px] scale-[1.5] lg:hidden select-none`}
      />
      {/* options and icons */}
      <div
        className={` min-w-[50px] absolute top-0 h-[35px] z-[12] flex group cursor-pointer right-0   m-[2px]  mb-[10px] ${
          showExitOptions
            ? `w-[350px] backdrop-blur-lg bg-black bg-opacity-[0.2] rounded-[15px]`
            : ``
        }`}
      >
        {/* icon container */}
        <div
          onClick={() => {
            if (showExitOptions) {
              setshowDonationBox(false);
            } else {
              setshowExitOptions(true);
            }
          }}
          className={`flex w-[60px] items-center justify-center flex-row-reverse left-0 group`}
        >
          {/* stright arrow */}
          <span
            style={{
              transition: `transform 600ms , opacity 650ms ease-in-out`,
            }}
            className={`flex group-hover:bg-green-300 w-[15px] h-[1px] border translate-x-[-1px] jover ${
              showExitOptions ? `opacity-0  translate-x-[-15px]` : ``
            }  scale-[1.1] `}
          />

          {/* upper & lower arrow lines container */}
          <div className=" flex items-ceter justify-center flex-col ">
            {/* upper arrow */}
            <span
              style={{
                transition: `transform 450ms , background 200ms ease-in-out`,
                transformOrigin: `center right`,
              }}
              className={`flex group-hover:bg-green-300 bg-blue-200 w-[2px] h-[10px] scale-[1.1] 
            rotate-[-130deg] translate-y-[1px]
            ${
              showExitOptions
                ? `rotate-[-135deg]  translate-y-[4.2px] scale-y-[1.6] bg-red-400`
                : ``
            } `}
            />
            {/* lower  arrow */}
            <span
              style={{
                transition: `transform 450ms , background 200ms ease-in-out`,
                transformOrigin: `center right`,
              }}
              className={`flex group-hover:bg-green-300 translate-y-[-1px] scale-[1.1] bg-blue-200 w-[2px] h-[10px] rotate-[130deg] 
              ${
                showExitOptions
                  ? `rotate-[135deg]  translate-y-[-4.4px] scale-y-[1.6] bg-red-400
                `
                  : ``
              }`}
            />
          </div>
        </div>
        {/* Options */}
        <div
          className={` justify-center items-center w-[80%] gap-x-[35px]  ${
            showExitOptions ? `flex` : `hidden`
          }`}
        >
          {exitsOptions.map((option, index) => {
            return (
              <>
                {(() => {
                  const icon = (
                    <option.icons.icon
                      style={{
                        transition: `opacity 100ms ${
                          index * 150
                        }ms , transform 200ms ease-in-out`,
                      }}
                      title={option.title}
                      size={20}
                      fill={`white`}
                      className={`hover:fill-${
                        option?.icons?.fill || "white"
                      } hover:bg-black w-max h-max p-[5px] bg-opacity-[0.3] rounded-full lg:hover:translate-y-[-5px]  ${
                        showExitOptions ? `opacity-[1]` : `opacity-0`
                      } ${showExitOptions ? `opacity-[1]` : `opacity-0`}`}
                    />
                  );
                  if (option.onClickFunction.target) {
                    return (
                      <Link smooth={true} duration={3000} to={``}>
                        {icon}
                      </Link>
                    );
                  } else {
                    return (
                      <div onClick={option?.onClickFunction?.onClick}>
                        {icon}
                      </div>
                    );
                  }
                })()}
              </>
            );
          })}
        </div>
      </div>
      <DonationText />
    </div>
  );
}
