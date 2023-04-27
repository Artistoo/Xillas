import React from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import Ticket from "../../components/Ticket";
import { TransactionContext } from "../../context/TransactionContext";
import TicketMask from "../../assets/mask/TicketMask.png";
import TransactionInstances from "../../components/TransactionInstances";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
/* JSX  */
export default function History() {
  const [historyText, historyTextInView] = useInView({});
  const { currentAccount } = React.useContext(TransactionContext);
  return (
    <Element name={`History`}>
      <div
        className={`min-h-[550px]  flex items-center justify-center  mb-[80px] flex-wrap`}
      >
        {/* /* left part history text /* */}
        <span
          style={{
            transition: "all 400ms ease-in-out",
          }}
          className={`min-w-[550px] w-[560px] max-w-max  min-h-[420px] flex items-center justify-start  flex-col py-[15px] lg:min-h-[100%] gap-y-[15px]`}
        >
          <div
            ref={historyText}
            className={`text-center  max-w-min px-[15px] min-h-[250px] flex items-center justify-center flex-col gap-y-[12px] lg:min-w-[85%] min-w-[520px]`}
          >
            <h2 className={`font-[openSauce] text-[50px] uppercase `}>
              history of <b className="text-blue-100">transactions</b>
            </h2>
            <p
              className={`font-[raleway] text-gray-200 text-[16px] break-all w-[78%]`}
            >
              {currentAccount ? (
                <>you are now connected , start making transaction</>
              ) : currentAccount ? (
                <>last transaction made at : {} , Transaction made : </>
              ) : (
                <>connect your wallet and start making transactions</>
              )}
            </p>
          </div>
          <div
            style={{
              maskImage: `url(${TicketMask})`,
            }}
            className={`min-h-[208px] h-[190px] max-w-[440px]  flex items-center justify-center lg:min-w-[85%] min-w-[520px] bg-yellow-500 maskImage`}
          >
            <Ticket />
          </div>
        </span>

        {/* Right side where all the transaction history will be showen */}
        {localStorage.data && (
          <span
            className={`my-[8px] lg:my-auto min-w-[550px] w-[560px] flex items-center jusitfy-center border min-h-[400px] ${
              localStorage.data && JSON.parse(localStorage.data)?.length
                ? "flex"
                : "hidden"
            }`}
          >
            <div
              className={`relative w-full items-center justify-center  border h-[450px] border-blue-600 flex `}
            >
              <Swiper
                spaceBetween={30}
                className={`h-full flex w-full items-center justify-center flex-col `}
                slidesPerView={2}
                direction={"vertical"}
              >
                {JSON.parse(localStorage.data)?.map((instance) => {
                  return (
                    <SwiperSlide
                      className={`w-full flex items-center justify-center border-[5px] border-red-200 `}
                    >
                      <TransactionInstances instanceData={instance} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              {/* Arrow to swiper down  */}
              {localStorage.data && JSON.parse(localStorage.data)?.length > 2
                ? ""
                : ""}
            </div>
          </span>
        )}
      </div>
    </Element>
  );
}
