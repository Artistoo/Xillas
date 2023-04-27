//lib
import { useInView } from "react-intersection-observer";
import React from "react";
//Asset
import Works from "../assets/Videos/works.gif";
import Light from "../assets/PNG/addon/Light.png";
import Cloud from "../assets/PNG/addon/Cloud.png";
import Tunnel from "../assets/PNG/addon/Tunnel.png";
import CloudColorful from "../assets/PNG/addon/ColorfulCloud.png";
import MetaLogo from "../assets/PNG/icons/MetaMask_Fox.svg.png";
//components
import { TransactionContext } from "../context/TransactionContext";
//icons
import { BiLogInCircle as Login } from "react-icons/bi";
/* import {TbPlugConnectedX as NotConnected, TbPlugConnected as Connected } from 'react-icons/tb' */
import { SiBitcoin as Transact } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { MdSignalCellularConnectedNoInternet3Bar as Connected } from "react-icons/md";
import {
  TbPlugConnected as isConnected,
  TbPlugConnectedX as XisConnected,
} from "react-icons/tb";
import { GrCheckmark } from "react-icons/gr";
import { BsCheck2 as Check } from "react-icons/bs";

/* JSX */
export default function work({ show, setShow, sticky }) {
  //context
  const { currentAccount } = React.useContext(TransactionContext);
  //states
  const [Steps, setSteps] = React.useState([
    {
      title: "download metaMask",
      check: false,
      troubleShoot: `download the metaMask extension `,
      showSloution: false,
      artwork: {
        type: "img",
        art: MetaLogo,
      },
      condition: () => {
        return !!window?.ethereum ? true : false;
      },
    },
    {
      title: "Login to your Account",
      check: false,
      troubleShoot: `create a metamask Account `,
      showSloution: false,
      artwork: {
        type: "icon",
        art: Login,
        fill: () => {
          return currentAccount ? "#2ecc71" : "#e74c3c";
        },
      },
      condition: () => {
        return !!currentAccount;
      },
    },
    {
      title: "connect wallet",
      check: false,
      troubleShoot: "allow the connection",
      showSloution: false,
      artwork: {
        type: "icon",
        art: currentAccount ? isConnected : XisConnected,
        fill: "transparent",
      },
      condition: () => {
        return !!currentAccount;
      },
    },
    {
      title: "start making transactions",
      check: false,
      troubleShoot: "true",
      showSloution: false,
      artwork: {
        type: "icon",
        art: Transact,
        fill: "rgb(255, 215, 0)",
      },
      condition: () => {
        return true;
      },
    },
  ]);
  const [showSloution, setshowSloution] = React.useState({
    index: NaN,
    show: false,
    valid: {
      index: NaN,
    },
  });

  return (
    <div
      style={{ transition: `opacity 250ms ease-in-out` }}
      className={`${
        show
          ? `opacity-[1] pointer-events-auto`
          : "opacity-[0] pointer-events-none"
      } ${
        sticky &&
        `top-[-280px] lg:translate-y-[335px] translate-y-[-0px] translate-x-[-100px] lg:top-[-30] lg:translate-y-[330px]`
      } absolute translate-y-[320px] lg:translate-y-[240px] lg:min-w-[600px] min-w-[430px] lg:min-h-[400px] z-[1000] min-h-[350px] flex-wrap overflow-hidden bg-gradient-to-tl from-[#c1ff72] to-[#37c9e0] backdrop-blur-lg flex gap-y-[30px] lg:gap-y-[15px] flex-gol`}
    >
      {/* images for the background Design */}
      <img
        src={Tunnel}
        className={`absolute translate-y-[50%]  left-[-250px] w-[520px]`}
      />
      <img
        src={Cloud}
        className={`absolute translate-y-[-30px] w-[220px] right-[-90px] opacity-[0.6] blur-[2px]`}
      />
      <img
        src={CloudColorful}
        className={`absolute blur-sm opacity-[0.8] top-[50%] left-[90px]`}
      />
      {/* content */}
      <div
        className={`   flex items-center justify-center lg:justify-between flex-wrap h-[110px] lg:text-start text-center  w-full min-w-[150px] translate-y-[20px] lg:gap-y-auto gap-y-[10px] lg:mb-auto mb-[5px]`}
      >
        <span
          className={`flex min-w-[220px] items-center lg:justify-start justify-center  relative lg:mx-[5px] w-[50%]`}
        >
          <h2 className={`font-[Bebas]  text-[70px] text-black`}>Works</h2>
          <img
            src={Light}
            className={`absolute w-[140px] lg:translate-y-0 translate-y-[-8px] lg:w-[170px] translate-x-[115px]`}
          />
        </span>
        <p
          className={`w-[40%] min-w-[220px] text-black font-[Raleway] lg:translate-y-0 translate-y-[-30px] text-[15px] mx-[4px] text-center`}
        >
          have a quick insight on how you can use XILLAS
        </p>
      </div>
      {/* Video & Steps */}
      <div
        className={`  flex lg:flex-nowrap flex-wrap min-w-[250px] items-center lg:justify-between justify-center lg:gap-x-[26px]`}
      >
        {/* How to Video */}
        <span
          className={` -[2px] relative min-w-[220px] lg:w-[56%] w-[90%] lg:items-start items-center   justify-center lg:h-full h-max lg:p-0 p-[15px] `}
        >
          <img
            src={Works}
            style={{
              boxShadow: `0 4px 6px rgba(0, 0, 0, 0.8), 0 1px 300px -100px rgba(0, 0, 0, 0.8)`,
            }}
            className={`w-full  m-[4px] translate-x-[-5px] lg:translate-x-0`}
          />
        </span>
        {/* STEPS */}
        <span
          className={`-[10px] flex flex-col items-center justify-start min-w-[220px] lg:w-[44%] w-full py-[15px] lg:py-auto h-full  relative`}
        >
          {Steps.map((step, stepIndex) => {
            const pStyle = `w-[180px]`;
            return (
              <div
                onClick={() => {
                  if (step.troubleShoot) {
                    setSteps((current) =>
                      current.map((x, i) => {
                        if (i === stepIndex) {
                          if (!x?.condition()) {
                            return { ...x, showSloution: !x.showSloution };
                          } else {
                            return {
                              ...x,
                              check: () => {
                                return true;
                              },
                            };
                          }
                        } else {
                          return x;
                        }
                      })
                    );
                  }
                }}
                className={`lg:w-[95%] w-[65%]   lg:translate-y-[2px] overflow-hidden text-[14px] font-[Raleway] text-gray-800 flex h-[37px] items-center justify-center `}
              >
                {/* Artwork */}
                <div
                  style={{
                    opacity: show ? 1 : 0,
                    transition: `opacity 500ms ${
                      stepIndex * 400
                    }ms ease-in-out `,
                  }}
                  className={`w-[15%] h-full flex items-center justify-center `}
                >
                  {step.artwork.type == "img" ? (
                    <img src={step.artwork.art} className={`w-[65%] `} />
                  ) : (
                    <step.artwork.art
                      fill={
                        step.artwork?.fill instanceof Object
                          ? step.artwork?.fill()
                          : step.artwork?.fill
                      }
                      className={`w-[60%] h-[60%]  `}
                    />
                  )}
                </div>
                {/* text & Sloution */}
                <div
                  style={{
                    opacity: show ? 1 : 0,
                    transition: `opacity 500ms ${
                      stepIndex * 550
                    }ms , transform 250ms , color 50ms ease-in-out `,
                  }}
                  className={`w-[85%] lg:hover:translate-x-[7px] ${
                    step.condition()
                      ? `hover:text-green-600`
                      : "hover:text-gray-600"
                  } overflow-hidden h-full flex items-center justify-start `}
                >
                  <span
                    //52
                    style={{
                      transition: `transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                    }}
                    className={`absolute flex items-center justify-center  min-w-max gap-x-[35px]  ${
                      step?.showSloution
                        ? `translate-x-[-53.3%]`
                        : `translate-x-[-0%]`
                    }`}
                  >
                    <p
                      className={`${pStyle} ml-[5px]  ${
                        step.showSloution ? `opacity-[0]` : `opacity-[1]`
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`${pStyle} text-orange-500 ${
                        step.showSloution ? `opacity-[1]` : `opacity-0 `
                      }`}
                    >
                      {step.troubleShoot}
                    </p>
                  </span>
                </div>
                <Check
                  className={`flex w-[20px] h-[20px] absolute right-[10px] lg:translate-x-0 translate-x-[-80px] ${
                    step.check
                      ? "opacity-[1] fill-green-300"
                      : `opacity-0 fill-black`
                  }`}
                />
              </div>
            );
          })}
        </span>
      </div>
    </div>
  );
}
