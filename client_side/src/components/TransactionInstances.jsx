import React from "react";

//Asset
import worldI from "../assets/PNG/world/world I.png";
import worldII from "../assets/PNG/world/world II.png";
import worldIII from "../assets/PNG/world/wolrd III.png";
import worldIV from "../assets/PNG/world/world IV.png";
import worldV from "../assets/PNG/world/world V.png";
import Typing from "typewriter-effect";
import Web3 from "web3";

export default function TransactionInstances() {
  const tempData = {
    date: {
      day: "05",
      month: "05",
      year: "2025",
      Hour: "8",
    },
    address: "0*0548787878EAZEZ5454",
    to: "0*67487az4e57ZEAE15454",
    amount: "0.000054",
    art: (gallery, index) => gallery[index],
    message:
      "thank you for the greate gifs that you have given me , as a thank i wanna give you back this small gifs , please accept it from me",
  };
  const [sliceTo, setSliceTo] = React.useState({ to: 8, max: false });
  const [convertAmountTo, setConvertAmountTo] = React.useState({
    index: 0,
    unit: {
      ether: tempData.amount,
      wei: Web3.utils.toWei(tempData.amount.toString(), "ether"),
    },
  });

  const gallery = [worldI, worldII, worldIII, worldIV, worldV];

  const artworks = React.useMemo(
    () => tempData.art(gallery, Math.round(Math.random() * gallery.length)),
    []
  );

  //Functions
  const onClick = (target = tempData.to) => {
    setSliceTo((current) => {
      setInterval(() => {
        if (!current.max) {
          current.to < target.length
            ? current.to + 1
            : () => {
                current.to = target.length;
                current.max = true;
              };
        } else {
          current.to > 8
            ? current.to--
            : () => {
                current.to = 8;
                current.max = false;
              };
        }
      }, 1000);
    });
  };
  return (
    <div
      className={`flex items-center justify-around  w-[80%] h-[190px] max-w-[450px] backdrop-blur-lg`}
    >
      <img
        className={`h-[90%]   w-[40%] max-w-[150px] mx-[8px] `}
        src={artworks}
        alt={`Transaction Image`}
      />
      {/* Transaction Data */}
      <span
        className={`flex items-center justify-center  flex-col w-[70%] max-w-[300px]  mx-[5px]`}
      >
        {/* Time */}
        <div
          className={` max-h-max text-[10px] uppercase absolute top-[3px] right-[5px] font-[openSauce] text-gray-400 `}
        >
          {tempData.date.day} /{tempData.date.month} /{tempData.date.year}
        </div>
        {/* Address */}
        <div
          className={`font-[Raleway] text-[14px] text-gray-300 flex justify-center items-start w-full border-b flex-col my-[5px] gap-y-[3px]`}
        >
          {[
            { title: "From:", content: tempData.to },
            { title: "To:", content: tempData.address },
          ].map((para) => (
            <div className={`flex relative  w-[90%] group cursor-pointer`}>
              <p className={`w-[20%] font-[openSauce] font-thin `}>
                {para.title}
              </p>
              <p>{para.content}</p>
              <div
                style={{
                  transition: `background 300ms , transform 500ms ease-in-out `,
                }}
                className={`w-full h-full bg-white absolute bg-opacity-[0.5] scale-x-[0] origin-left group-hover:bg-opacity-[0.3] group-hover:scale-x-[1]`}
              />
            </div>
          ))}
        </div>
        {/* Message */}
        <div className={`text-[13px] font-[Raleway] text-gray-300  `}>
          <p>{tempData.message}</p>
        </div>
        {/* Amount */}
        <div
          style={{
            transition: `background 50ms ease-in-out`,
          }}
          onClick={() => {
            setConvertAmountTo((current) => ({
              ...current,
              index:
                convertAmountTo.index <
                Object.values(convertAmountTo.unit).length
                  ? convertAmountTo.index++
                  : (convertAmountTo.index = 0),
            }));
          }}
          className={`font-[Raleway] text-[14px] text-gray-900 my-[5px] backdrop-blur-sm rounded-full px-[15px] py-[1px] bg-yellow-100 translate-y-[10px]  cursor-pointer hover:bg-yellow-200 flex gap-x-[8px] relative  group overflow-hidden`}
        >
          <div>
            {Object.values(convertAmountTo.unit)[convertAmountTo.index]}
          </div>
          <div className={`group-hover:text-black relative`}>
            {Object.keys(convertAmountTo.unit)[convertAmountTo.index]}
            <div
              className={`top-[95%] h-[1px] w-full bg-black scale-x-0 group-hover:scale-x-[1] transition-transform mix-blend-darken bg-opacity-[0.6] absolute `}
            />
          </div>
        </div>
      </span>
    </div>
  );
}
