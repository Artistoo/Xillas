import React from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
//Icons import
import { FiPlus } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";
//asset import
import CRYPTO from "../../assets/Videos/CRYPTO.gif";
//import BoxsArtwork
import XilasLogo from "../../../public/XILAS FAVICON.png";
import Etherlogo from "../../assets/PNG/icons/ethereum-eth-logo.png";
//Components
import "../../styling/index.css";
export default function Learn() {
  const { useState: state } = React;
  const [currentAnswer, setcurrentAnswer] = state({
    C_question: "",
    C_answer: "",
    C_bgColor: "",
    C_artwork: "",
    C_title: "",
  });
  const QuestionsAnDintroduction = () => (
    <>
      {/* QUESTION AND INTRODUCTION FIRST HALF */}
      <div
        id="introduction&Questions"
        className={`flex min-w-[400px] max-w-[500px]  flex-col min-h-[500px]  lg:min-h-[530px] justify-center  lg:gap-y-[50px] gap-y-[60px]  p-[15px] items-center `}
      >
        {/* INTRODUCTION */}
        <div
          className={`max-w-[180px] self-start text-start flex items-start justify-start flex-col  `}
        >
          <h2
            className={`uppercase lg:text-[55px] font-[openSauce] font-semibold text-[47px]`}
          >
            LEARN
          </h2>
          <p
            className={`text-[19px] font-[raleway] text-gray-400 tracking-wider`}
          >
            what is :
          </p>
        </div>
        {/* QUESTIONS */}
        <div
          id="quesitons"
          className={`grid grid-cols-3 grid-rows-2 min-w-[450px] min-h-[350px] gap-2 `}
        >
          {questions.map((question, index) => {
            const { bgColor, q } = question;
            return (
              <span
                key={q}
                onClick={() => {
                  return (
                    q.length &&
                    setcurrentAnswer({
                      C_question: q,
                      C_answer: question?.answer,
                      C_artwork: question?.artwork,
                      C_bgColor: bgColor || "",
                      C_title: question?.title,
                    })
                  );
                }}
                className={`max-h-[200px] transitit relative text-${
                  bgColor == "white" && "black"
                } rounded-[7px] cursor-pointer flex items-center  select-none justify-center questions font-[raleway] min-w-[150px] p-[5px] overflow-hidden self-end-stretch  flex-col  self-stretch place-items-stretch place-self-stretch
                ${
                  question?.grid && question.grid == "shrink" && "max-h-[120px]"
                }
                ${
                  question?.grid &&
                  question.grid == "grow" &&
                  "absolute translate-y-[-28px] scale-y-[1.3]"
                }`}
                style={{
                  background: bgColor,
                }}
              >
                {q && (
                  <div
                    title={`more`}
                    className={`self-end  flex items-center   absolute top-0 justify-start m-[3px] p-[2px] w-auto cursor-pointer  rounded-full `}
                  >
                    <FiPlus size={22} />
                  </div>
                )}

                {q || (
                  <img
                    src={CRYPTO}
                    alt={``}
                    className={` pointer-events-none absolute h-[100%] object-cover  `}
                  />
                )}
                {question?.artwork && question?.artwork.logo ? (
                  <question.artwork.logo
                    size={23}
                    className={`w-[25px] translate-y-[30px]`}
                  />
                ) : (
                  <img
                    src={question.artwork}
                    className={`w-[25px] translate-y-[30px]`}
                  />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
  const Answers = () => (
    <>
      <div
        className={`min-w-[450px] max-w-[500px] lg:min-h-[530px] min-h-[300px] h-auto p-[20px] flex items-center justify-center lg:translate-y-[10px] lg:justify-end flex-col gap-y-[13px] `}
      >
        {/* Box switch  TBWO */}
        <div
          className={`flex flex-col  max-h-[250px] items-center  relative overflow-hidden `}
        >
          {/* Default no Question */}
          <div
            className={`bg-gradient-to-tl ${
              currentAnswer.C_answer ? "hide" : "show"
            } from-red-300 to-yellow-300 w-[400px] transition-all min-h-[250px] Transition rounded-[10px] flex items-center justify-center  flex-col text-white font-[raleway]  h-[250px] `}
          >
            <h2
              className={`font-[spartan] select-none text-[50px] tracing-wide `}
            >
              TUTORIAL
            </h2>

            <p className="text-[14px] text-gray-700 text-start px-[20px] ">
              new to the world of smart contracts ?
              <br />
              don't worry. We got you coverd
            </p>
          </div>
          {/* Answers */}
          {/* Answers BOX */}
          <div
            style={{
              background: currentAnswer.C_bgColor,
              transition: " translate 1000ms , opacity 1000ms ease-in",
              opacity: currentAnswer.C_answer.length ? 1 : 0,
            }}
            className={` ${
              currentAnswer.C_answer.length ? `hide` : `show`
            } w-[400px] Easing min-h-[250px] transition-all rounded-[10px] flex items-center justify-center  flex-col text-black  font-[raleway] h-[250px]  backdrop-blur-lg gap-y-[30px]`}
          >
            <h2
              style={{
                color: currentAnswer.C_bgColor == "white" ? "black" : "white",
              }}
              className={`font-[openSauce] text-[15px] tracking-wider  `}
            >
              <BiArrowBack
                size={42}
                fill={() =>
                  currentAnswer.C_bgColor == "white" ? "black" : "white"
                }
                className={`${
                  currentAnswer.C_answer.length == 0 && "hidden"
                } w-[20%] top-0 left-0 mt-1 p-[10px] flex cursor-pointer  hover:fill-blue absolute z-[100]   self-start transition-all hover:translate-x-[-15px]`}
                onClick={() => setcurrentAnswer({ C_answer: "" })}
              />
              {currentAnswer.C_question}
            </h2>
            <p
              style={{
                color: currentAnswer.C_bgColor == "white" ? "black" : "white",
              }}
              className={`text-[14px] font-[raleway]  text-center px-[25px] `}
            >
              {currentAnswer.C_answer.length > 450
                ? currentAnswer.C_answer.length.slice(0, 400)
                : currentAnswer.C_answer}
            </p>
            {currentAnswer?.C_artwork?.logo ? (
              <currentAnswer.C_artwork.logo
                size={30}
                className={`w-[29px] self-end absolute top-0 m-[10px]  `}
              />
            ) : (
              <img
                src={currentAnswer?.C_artwork}
                className={`w-[29px] self-end absolute top-0 m-[10px]  `}
              />
            )}
          </div>
        </div>
        {/* questions Shortcut */}
        <div
          className={`min-h-[100px] max-h-[110px] w-[396px] rounded-[10px] flex   gap-x-[40px] items-center justify-center relative`}
        >
          {questions
            .filter((x) => x.artwork)
            .map((x) => (
              <div
                onClick={() =>
                  setcurrentAnswer({
                    C_answer: x.answer,
                    C_artwork: x?.artwork,
                    C_question: x.q,
                    C_bgColor: x.bgColor,
                    C_title: x.title,
                  })
                }
                style={{
                  background: currentAnswer.C_title == x.title && x.bgColor,
                }}
                className={`w-[80px]  group aspect-square  rounded-[10px] bg-red-100 flex items-center flex-col text-gray-500 font-[openSauce] text-[13px] justify-center cursor-pointer  `}
              >
                {x.artwork?.logo ? (
                  <x.artwork.logo
                    fill={"black"}
                    className={`w-[40%] h-auto `}
                  />
                ) : (
                  <img src={x.artwork} className={`w-[40%] h-auto`} />
                )}
                <p
                  style={{
                    color: currentAnswer.C_title == x.title && "white ",
                  }}
                  className={` absolute translate-y-[50px]`}
                >
                  {x?.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
  const questions = [
    {
      q: "what is crypto ?",
      answer:
        "Cryptocurrency is a digital asset that uses cryptography to secure transactions and control supply. It operates independently of a central bank and can be used as a medium of exchange or investment.",
      bgColor: `blue`,
      artwork: { logo: BsCurrencyBitcoin },
      title: "crypto",
    },
    {
      q: "what is blockchain ?",
      answer:
        "Blockchain is a decentralized, digital ledger that records transactions in a secure and transparent manner. It allows multiple parties to have access to the same information without the need for a central authority.",
      bgColor: "white",
      artwork: { logo: SiBlockchaindotcom },
      title: "blockchain",
    },
    {
      q: "what is smart contract",
      answer:
        "A smart contract is a self-executing agreement with the terms of the agreement between buyer and seller being directly written into lines of code. They run on blockchain technology, making them secure, transparent, and tamper-proof.",
      bgColor: "orange",
      grid: "shrink",
      title: "smart contract",
    },
    {
      q: " what is ethereum ?",
      answer:
        "Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts and decentralized applications (dApps). It provides a cryptocurrency called Ether (ETH) used to pay for transactions and computational services on the network",
      bgColor: "white",
      artwork: Etherlogo,
      title: "ethereum",
    },
    {
      q: "what is XILLAS ?",
      answer: `this is a  smart contract platform aimed at revolutionizing the way transactions are conducted. By using blockchain technology and smart contracts, we aim to make transactions more secure and reliable for everyone involved. Join us in the journey to a more decentralized and trustless future!`,
      bgColor: "purple",
      artwork: XilasLogo,
      title: "XILLAS",
    },
    { q: null, answer: "", bgColor: CRYPTO, grid: "grow" },
  ];
  return (
    <div
      className={`flex  items-center justify-center lg:mb-[200px] lg:px-0  flex-wrap min-h-[400px] gap-y-[60px] lg:gap-x-[55px]`}
    >
      <Element name={`Tutorial`} />
      <QuestionsAnDintroduction />
      <Answers />
    </div>
  );
}
