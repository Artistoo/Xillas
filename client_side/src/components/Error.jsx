import React, { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { AiOutlineReload, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TiWarningOutline } from "react-icons/ti";
import { BiErrorCircle } from "react-icons/bi";
import MetaMaskLogo from "../assets/PNG/icons/MetaMask_Fox.svg.png";
export default function Error({ error, setError }) {
  const [openError, setopenError] = React.useState(false);
  const transition = 200;
  return (
    error.message && (
      <div
        style={{
          transition: "background 1000ms 500ms ease-in-out",
        }}
        className={`
         absolute min-h-full  bg-opacity-[0.3]  w-full h-[100vh] flex items-center  z-[500]  translate-y-[-650px] lg:justify-center justify-end pointer-events-none`}
      >
        {/* Large screen */}
        <div
          onClick={() =>
            error?.orClick &&
            error.onClick?.type == "redirect" &&
            useNavigate(error.onClick.link)
          }
          className={`lg:flex hidden top-0 sticky border translate-y-[-380px] w-[400px] flex items-center justify-center rounded-[13px] p-[10px] min-h-[100px] overflow-hidden flex-col pointer-events-auto ${
            error.type == "mid"
              ? `bg-gradient-to-tl from-transparent to-orange-400`
              : "bg-gradient-to-tl from-transparent to-red-500"
          }`}
        >
          {(() => {
            const Styling = `lg:absolute w-[250px] h-[150px] fill-red-500 rotate-[15deg]  opacity-[0.3]`;
            switch (error.type) {
              case "mid":
                return (
                  <TiWarningOutline
                    style={{
                      fill: "orange",
                    }}
                    className={Styling}
                  />
                );
              case "high":
                return <BiErrorCircle className={Styling} />;
            }
          })()}
          <img
            src={error.img}
            className={`absolute w-[150px] h-auto translate-x-[-170px] opacity-[0.6] `}
          />
          <div
            className={`w-full flex items-center justify-end h-min absolute top-[5px] `}
          >
            <AiFillCloseCircle
              onClick={() => {
                setError((c) => ({ ...c, message: "" }));
              }}
              size={20}
              style={{
                transition: `fill 100ms 50ms , scale 50ms ease-in`,
              }}
              className="m-[3px] hover:fill-red-500 w-[30px] hover:scale-[1.1] translate-x-[-5px] cursor-pointer"
            />
          </div>
          <div className="z-10 translate-y-[-7px]">
            <p className="font-[openSauce]  ">{error.message}</p>
          </div>
          {error?.onClick?.btn && (
            <button
             
              onClick={() => {
                if (error.onClick.type == "redirect") {
                  useNavigate(error.onClick.link);
                }
              }}
              type="button"
              style={{
                transition: `background 100ms ease-in`,
              }}
              className="font-[Raleway] border rounded-full px-3 translate-y-[28px] absolute hover:bg-gray-300 hover:bg-opacity-[0.3] "
            >
              {error?.onClick?.btn || "something"}
            </button>
          )}
        </div>
        {/* Small Screen */}
        <div
          style={{
            transition: `all ${transition}ms ease-in-out`,
          }}
          onClick={() => setopenError((current) => (current = !current))}
          className={`group lg:hidden z-[250] flex items-center justify-center translate-x-[-30px] cursor-pointer pointer-events-auto  ${
            openError
              ? "w-[250px] h-[110px] bg-gradient-to-br from-orange-500 to-transparent rounded-[15px] overflow-hidden "
              : `w-[52px] h-[52px] rounded-full  hover:scale-[1.1] ${
                  error.type == "mid"
                    ? "bg-gradient-to-tl from-orange-500 to-red-400  "
                    : "bg-gradient-to-tl from-red-600 to-red-500 "
                }`
          }`}
        >
          {/* hide button */}
          <div
            onClick={() =>
              setError((c) => {
                ({ ...c, message: "" });
              })
            }
            style={{
              transition: `transform ${
                transition + 50
              }ms , top ${transition}ms , right ${transition}ms ,  opacity ${transition}ms 100ms ease-in-out `,
            }}
            className={`absolute ${
              !openError
                ? `flex items-center justify-center w-full h-full origin-bottom-left	opacity-[0] group-hover:opacity-[1]  group-hover:rotate-[-50deg]`
                : "top-[3px] right-[5px] "
            } `}
          >
            <AiFillCloseCircle
              className={`  w-[20px] h-[20px] z-[100] hover:fill-red-400  ${
                !openError && `group-hover:rotate-[50deg]`
              }`}
            />
          </div>
          {/* small screen Icon */}
          <div
            className={`flex items-center justify-center  ${
              error.img && !openError ? "hidden" : "flex"
            } `}
          >
            {(() => {
              const Styling = ` absolute  translate-y-[-2px] ${
                openError
                  ? "w-[200px]  h-[200px] rotate-[10deg] opacity-[0.4]  fill-red-400 "
                  : `w-[35px]  h-[35px] fill-white `
              }`;
              const style = {
                transition: `width ${transition}ms , transform ${transition}ms , fill ${transition}ms ease-in-out `,
              };
              switch (error.type) {
                case "mid":
                  return <TiWarningOutline style={style} className={Styling} />;
                case "high":
                  return <TiWarningOutline style={style} className={Styling} />;
              }
            })()}
          </div>
          {/* Small Screen error Message */}
          <div
            style={{
              transition: `opacity 100ms ${
                openError ? transition + 100 : 0
              }ms ease-in-out`,
            }}
            className={`${
              openError ? `opacity-[1]` : "opacity-[0]"
            } absolute font-[openSauce] delay-[100ms] z-10  translate-y-[-8px] text-[14px] flex items-center justify-center text-center `}
          >
            {error?.message}
          </div>
          {/* Small Screen Button */}
          {error?.onClick?.btn && openError && (
            <button
              style={{
                transition: `background 1000ms , opacity 100ms ease-in `,
              }}
              className={`absolute font-[Raleway] translate-y-[34px] border px-[19px] mt-[3px] rounded-full bg-white bg-opacity-[0.1] hover:bg-opacity-[0.2] z-10 ${
                openError ? `opacity-[1]` : "opacity-[0]"
              }`}
            >
              {error.onClick?.btn || `start`}
            </button>
          )}
          {/*Small Screen error Image */}
          {error?.img && openError && (
            <img
              style={{}}
              src={MetaMaskLogo}
              className={`absolute opacity-[0.3]`}
            />
          )}
        </div>
      </div>
    )
  );
}
