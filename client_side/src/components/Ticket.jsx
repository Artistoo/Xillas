import React from "react";
import TicketMask from "../../src/assets/mask/TicketMask.png";

export default function Ticket({ transactions, id }) {
  return (
    <div
      className={` h-full w-[84%]  my-[5px] flex items-center justify-center `}
    >
      <div
        className={`border-[3px] border-blue-800 h-[90%] w-[90%] flex items-center  justify-between relative`}
      >
        {/* acount Id */}
        <div
          className={`w-[15%] border h-full flex items-center justify-center bg-red-500`}
        >
          <p
            className={`rotate-[-90deg] font-[openSauce] text-[22px] tracking-[3px] `}
          >
            {"543AZ8RO"}
          </p>
        </div>
        {/* info about the users account  */}
        <div
          className={`w-[85%] border-pink-400 h-full border-[5px] flex items-center justify-center flex-col `}
        >
          <div
            className={`items-center justify-start min-h-[25%] h-max  w-full flex  text-gray-700 border-b-2 border-red-200 box-border  `}
          >
            <p className={`font-[openSauce] px-[5px] text-[33px] `}>
              account activity :{" "}
            </p>
          </div>
          <div
            className={`items-center min-h-[55%] h-max  w-full flex  justify-center`}
          >
            <span className={`w-[55%] mx-[5px]`}>
              <p
                className={`font-[Raleway] text-[17px] text-gray-100 px-[10px]`}
              >
                {transactions || `your transaction will apear here `}
              </p>
            </span>
            <hr className={`h-[80%] w-[1px] bg-white `} />
            <span
              className={`w-[45%] text-[14px] flex items-center justify-center font-[Raleway] flex-col text-start`}
            >
              {["Transactions", "Last_active", "Amount"].map((p) => (
                <p
                  style={{ transition: `transform 100ms , color 10ms 100ms ease-in-out` }}
                  className="w-full hover:text-green-300 cursor-pointer px-2 hover:translate-x-[5px]"
                >
                  {p}
                </p>
              ))}
            </span>
          </div>
          <div className={`items-center min-h-[20%] h-max border w-full`}>
            <div className={`h-[50%]`}></div>
            <div className={`h-[50%] w-full bg-green-600 flex justify-around `}>
              {Array(8)
                .fill("")
                .map((x) => (
                  <div className="w-[5%] translate-y-[-50%] h-[20px] rounded-full  bg-yellow-500 "></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
