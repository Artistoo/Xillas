import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import Arrow from "../../assets/PNG/addon/Arrow.png";
import SmilingFace from "../../assets/PNG/addon/SmilingFace.png";
import { NavLink } from "react-router-dom";
//asset
import Buble from "../../assets/Videos/Buble.gif";
//components
import transaction from "./transaction";
export default function header() {
  const [clicked, setClicked] = useState(false);
  return (
    <Element name={`Header`}>
      <div
        className={`flex min-h-[550px] flex-wrap items-center justify-around`}
      >
        <div
          id={`Header_artwork`}
          className={`lg:w-[40%] w-[1000px]  absolute lg:relative`}
        >
          <img
            src={Buble}
            className={`lg:max-w-[2300px]  lg:w-[1400px] blur-[50px] lg:blur-[50px] lg:opacity-[0.8] opacity-60 z-[-1] left-[110px] lg:left-[-250px] w-full  top-[-200px]   lg:top-[-330px] lg:translate-x-[10px] absolute `}
          />
        </div>
        <div
          id={`Header_text`}
          className={` z-1 w-[60%] min-w-[350px] flex flex-col items-center `}
        >
          {/* Header H1 Text */}
          <div
            className={`select-none text-[65px] text-center  lg:text-start lg:text-[75px] font-[Spartan]`}
          >
            <h1 className={`text-white`}>SEND</h1>
            <h1 className={`text-[#d6e8f7]`}>RECEIVE</h1>
            <img
              className={`absolute w-[160px] lg:translate-y-[-130px] lg:translate-x-[280px] lg:w-[200px] -translate-y-[200px] translate-x-[250px]`}
              src={SmilingFace}
            />
            <h1 className={`text-[#e0ff78]`}>TRANSACT</h1>
          </div>
          {/* Header subText */}
          <div
            id={`text_Detail`}
            className={` font-[raleway] flex  lg:max-w-[700px] gap-5`}
          >
            <h3
              className={`text-[14px] lg:text-[15px]  text-center lg:text-start max-w-[280px]`}
            >
              Experience the Benefits of Immutable and Tamper-Proof Contracts
            </h3>
            <div className={`hidden lg:flex flex-col text-[0.8rem]`}>
              <p>Go Ahead And forward</p>
              <p>Go Ahead And forward</p>
              <p>Go Ahead And forward</p>
              <p>Go Ahead And forward</p>
            </div>
          </div>
          {/* Header Start Button */}
          <Link
            to="TransactionSection"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <button
              className={`bg-[#e0ff78]  border text-black text-[18px] font-[raleway] font-semibold py-[8px] my-3 translate-y-[15px] w-[130px] rounded-full lg:-translate-x-[150px]`}
              onMouseDown={() => setClicked(true)}
              onMouseUp={() => setClicked(false)}
            >
              START
              <img
                src={Arrow}
                className={`absolute min-w-[150px] h-auto transition-all duration-75 translate-y-[-20px] translate-x-[70px] ${
                  clicked ? "flex" : "hidden"
                }`}
              />
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
}
