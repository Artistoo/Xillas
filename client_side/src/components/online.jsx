import React from "react";
import { AiOutlineReload } from "react-icons/ai";
export default function ({ isOnline }) {
  return (
    <div
      className={`${
        isOnline ? "hidden  translate-y-[-110%]" : "flex translate-y-[0%]"
      } h-auto z-[4000] py-[10px] sticky  transition-all duration-300 top-0 w-full font-[raleway] text-black flex items-center justify-center bg-yellow-200 `}
    >
      <div className="flex w-[50%] m-auto items-center justify-center gap-x-5">
        <p>you are offline</p>
        <AiOutlineReload className={`hover:fill-slate-600 transition-all cursor-pointer  w-[26px] aspect-square rounded-[3px] duration-150`} onClick={() => window.location.reload()} />
      </div>
    </div>
  );
}
