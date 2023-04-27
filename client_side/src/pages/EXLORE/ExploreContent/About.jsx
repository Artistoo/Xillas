//Lib
import React from "react";
import Typewriting from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { anime } from "react-anime";
// importing Assets
import RedStar from "../../../assets/Videos/RedStar.gif";
import BG from "../../../assets/PNG/bg/AboutBG.png";
import Stickers from "../../../assets/PNG/addon/Sticker.png";
import XillasLogo from "../../../../public/LOGO DISPLAY.png";
export default function About({ scrollPosition }) {
  //states
  const [screenWidth, setscreenWidth] = React.useState(window.innerWidth);
  const [stick, setStick] = React.useState(false);
  const [infoBoxs, editInfoBoxs] = React.useState([
    {
      title: "Programming languages",
      onDisplay: 0,
      content: [
        {
          title: "solidty",
          btnTxt: ` played a critical role in defining the rules and logic for the contract's operation.`,
        },
        {
          title: "javascript",
          btnTxt: `played the role for the user interface and users experiece`,
        },
      ],
      style: {
        img: "",
        color: "white",
        background: "linear-gradient(to bottom right, blue  , blue , pink )",
      },
    },
    {
      title: "Blockchain Network",
      onDisplay: 0,
      content: [
        {
          title: "blockchain",
          btnTxt: ` We used blockchain in our smart contract website to secure and record all transactions on an immutable ledger.`,
        },
      ],
      style: {
        img: "",
        color: "white",
        background: "linear-gradient(to bottom right, #ff416c, #ff4b2b)",
      },
    },
    {
      title: "Creation",
      onDisplay: 0,
      content: [
        { title: ["24", "02 ", "23"], btnTxt: `Proudly established inF` },
      ],
      style: {
        img: "",
        color: "white",
        background: "linear-gradient(to bottom right, #fbd3e9, #bb377d)",
      },
    },
  ]);
  const [ballScale, setBallScale] = React.useState({
    start: false,
    scale: 0,
  });
  //Ref
  const AboutTextRef = React.useRef(null);
  //inView
  const [AboutBoxs, AboutBoxsinView] = useInView({});
  //useEffects

  React.useEffect(() => {
    const size = () => {
      setscreenWidth(window.innerWidth);
    };
    console.log(screenWidth);

    window.addEventListener("resize", size);
    return () => {
      window.removeEventListener("resize", size);
    };
  }, [screenWidth]);

  return (
    <div
      className={`w-full h-max gap-y-[60px] flex flex-col items-center justify-center  lg:justify-start bg-black`}
    >
      {/* Background */}
      <div
        src={BG}
        style={{
          background: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "50% 50%",
        }}
        className={`absolute mix-blend-difference w-screen lg:min-h-[1180px]  min-h-[1800px] translate-y-[-50px] `}
      />
      {/* Star Artwork */}
      <img
        src={RedStar}
        className={` min-w-[1500px] blur-lg -left-[800px] -top-[80%] absolute  `}
      />
      {/* Text Header */}
      <div
        className={`relative lg:translate-x-0 max-w-[450px] flex justify-around items-center min-w-[300px] min-h-[220px] translate-x-[-80px] my-[20px]`}
      >
        <h2
          className={`font-[Bebas] leading-[100px] z-[1000] text-[110px]  uppercase text-gray-200 `}
        >
          <Typewriting
            options={{ delay: 50, cursor: "" }}
            onInit={(e) =>
              setTimeout(() => e.typeString(`Welcome to Xillas`).start(), 1200)
            }
          />
        </h2>
      </div>
      {/* Text info */}
      <div
        className={`relative  flex   lg:justify-between justify-center flex-row-reverse flex-wrap gap-y-[50px]`}
      >
        <span
          className={`w-[45%] mx-[15px] min-w-[400px] relative top-auto  font-[raleway] text-gray-100 text-[16px] h-max break-all px-[8px]  `}
        >
          <p className={`w-full top-0`}>
            A One Person Smart Contract Website for Sending Cryptocurrencies
            through Ethereum Blockchain In the world of finance and technology,
            cryptocurrencies have been one of the most revolutionary inventions
            in recent times. It has brought a paradigm shift to the traditional
            financial system and created an opportunity for people to invest,
            transact, and store their assets in a decentralized manner. The rise
            of cryptocurrencies like Bitcoin, Ethereum, and others have led to
            the creation of numerous blockchain-based services and applications
            that have the potential to change the way we conduct financial
            transactions. As a developer and a crypto enthusiast, I have always
            been fascinated by the potential of blockchain technology to create
            innovative solutions that solve real-world problems. This
            fascination motivated me to create Xillas - a smart contract website
            that enables users to send cryptocurrencies through the Ethereum
            blockchain. Xillas is a one-person project that I created from
            scratch. The idea behind Xillas was to create a platform that
            simplifies the process of sending cryptocurrencies by eliminating
            the need for intermediaries like banks, payment processors, and
            other third-party services. With Xillas, users can send
            cryptocurrencies directly to other users without any intermediaries,
            which not only saves time and money but also enhances the security
            and privacy of their transactions., and we look forward to serving
            you! Sincerely, The Xillas Team
          </p>
        </span>

        {/* BOXS */}
        <span
          className={`w-1/2 min-w-[390px] flex mx-[5px] items-center  justify-start max-h-max flex-col gap-y-[25px]`}
        >
          {/* BOXS CONTAINER */}
          <div
            ref={AboutBoxs}
            className=" lg:sticky relative top-0 text-gray-900 font-[raleway] min-w-[330px] text-[14px] flex flex-col items-center justify-center "
          >
            {infoBoxs?.map((box, index) => {
              return (
                <div
                  style={{
                    opacity: AboutBoxsinView ? setTimeout(() => 1, 10000) : 0,
                    transition: `opacity 500ms ${index * 1000}ms ease-in-out`,
                  }}
                  key={`aboutPageBox${index}`}
                  onMouseDown={() => {
                    screenWidth > 650 &&
                      setTimeout(() => setBallScale({ start: true }), 1000);
                    setInterval(() => setBallScale({ scale: `50` }), 1);
                  }}
                  className={`min-h-max h-[150px] min-w-[320px] w-[330px] flex items-center justify-end bg-gradient-to-tl from-pink-100 to-gray-100 p-[15px] my-3 rounded-[5px] overflow-y-hidden overflow-hidden items-between flex-row-reverse gap-y-[12px]  backdrop-blur-sm bg-opacity-0 mix-blend-difference group max-w-[390px] `}
                >
                  {/* Ball */}
                  <div
                    style={{
                      scale: screenWidth < 650 && ballScale.scale,
                      background: box.style.background,
                      transition: "transform 2000ms ease-in-out",
                    }}
                    className={` ${
                      screenWidth > 650 && `group-hover:scale-[90] scale-0`
                    } w-[150px] aspect-square rounded-full bg-gradient-to-t  top-[50px] from-orange-400 to-orange-600  translate-x-[50px] blur-[0px] absolute left-[150px]`}
                  />
                  <div className={`flex-col relative`}>
                    {/* Box title */}
                    <h2
                      style={{
                        transition: `color 300ms ease-in`,
                      }}
                      className={`z-[500] text-black group-hover:text-white relative group`}
                    >
                      {box.title}
                    </h2>
                    {/* Explain Box Text */}
                    <p
                      style={{
                        transition: `color 300ms ease-in`,
                      }}
                      className={`font-[raleway] text-[12px] text-gray-900 group-hover:text-white`}
                    >
                      {box.content[box.onDisplay]?.btnTxt}
                    </p>
                    {/* Button */}
                    <div className={`w-max gap-[15px] flex mt-[12px]`}>
                      {box.content?.map((btn, btnIndex) => (
                        <button
                          onClick={() => {
                            editInfoBoxs(
                              (cur) => (
                                (cur[index].onDisplay = btnIndex), (cur = cur)
                              )
                            );
                          }}
                          className={`border rounded-full px-[13px] py-[1.8px] bg-black bg-opacity-20  hover:text-white hover:bg-opacity-90 group-hover:text-white ${
                            box.onDisplay == btnIndex &&
                            `bg-opacity-80  bg-green-300 hover:text-black group-hover:text-gray-800 `
                          } flex ${
                            btn.title instanceof Object && `pointer-events-none`
                          }`}
                        >
                          {btn.title instanceof Object ? (
                            <>{btn.title.join("/")}</>
                          ) : (
                            <span className={`flex `}>{btn.title}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </span>
      </div>
    </div>
  );
}
