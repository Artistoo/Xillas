import React from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
/* Asset */
import Transparency from "../../assets/Videos/Transparency.mp4";
import Speed from "../../assets/Videos/Star Field.mp4";
import Security from "../../assets/Videos/Security.mp4";

export default function Services() {
  const [video, inview] = useInView();
  const videos = [
    {
      video: Security,
      header: "SECURITY & POLICY",
      para: `Our smart contract website offers secure, transparent
    transactions via blockchain technology`,
      semiPara: "secure and Reliable",
    },
    {
      video: Speed,
      header: "FAST & RELIABLE",
      para: `Our smart contract is designed with user-friendliness in mind.
      The process of executing transactions is streamlined`,
      semiPara: "Easy to use",
    },
    {
      video: Transparency,
      header: "TRANSPARENCY",
      para: `Transparency is a cornerstone of our smart contract website. We
      believe that all transactions should be open`,
      semiPara: "be invisible",
    },
  ];
  return (
    <div
      className={`min-h-[500px] flex items-center gap-[50px] justify-center flex-col`}
    >
      <Element name={`Services`} className={`flex items-center justify-center text-center lg:text-start w-full`}>
        <div
          className={`flex flex-col my-12 max-h-[100px] justify-center  lg:flex-row  lg:justify-around lg:gap-[50%] items-center w-[80%] gap-y-[5px] `}
        >
          <h2 className={`text-[36px] lg:text-[45px] font-[OpenSauce]`}>Services</h2>
          <p className={`font-[Raleway] max-w-[380px] text-gray-300`}>
            Enjoy Best transaction Services all in one place{" "}
          </p>
        </div>
      </Element>
      <div
        id={`servicesArtwork`}
        className={`flex justify-center lg:gap-10 gap-8 flex-wrap   lg:justify-start    items-center `}
      >
        {videos.map((currentVideo, index) => {
          return (
            <>
              {/* First box */}
              <span
                ref={video}
                key={currentVideo.semiPara}
                style={{
                  animationDelay: index * 100 + "ms",
                }}
                /* ${inview && 'lg:animate-showUp animate-showAside'} */
                className={`lg:max-w-[330px] max-w-[600px]  w-auto mx-5  rounded-[15px] lg:p-1 p-3 overflow-hidden gap-x-[15px] flex lg:flex-col   lg:bg-transparent items-center justify-center  max-h-[310px] lg:rounded-[8px] bg-black bg-opacity-25`}
              >
                <video
                  onMouseOver={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  src={currentVideo.video}
                  className={`lg:max-w-[330px]  hover:opacity-40 max-w-[280px] rounded-[15px] lg:rounded-[8px]`}
                  loop
                  muted
                />

                <div
                  id={`artworkSectionIIText`}
                  className={`flex lg:gap-5   lg:p-2  lg:w-auto  justify-between items-center `}
                >
                  <h2
                    className={`font-[Bebas] text-[25px] lg:text-[30px] p-2 max-w-[50%] text-ellipsis `}
                  >
                    {currentVideo.header}
                  </h2>
                  <hr
                    className={`flex lg:hidden w-[1px] bg-gradient-to-b from-blue-500 to-blue-100  min-h-[100px] self-center   `}
                  />
                  <div
                    className={`font-[Raleway] lg:text-start text-center text-[10px] p-2 max-w-[50%]`}
                  >
                    <p>{currentVideo.para}</p>
                    <p className="font-semibold   tracking-wide	 ">
                      {currentVideo.semiPara}
                    </p>
                  </div>
                </div>
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}
