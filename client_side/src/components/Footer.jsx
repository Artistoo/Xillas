import React from "react";
/* Library import */
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
/* Asset import  */
import.meta.env.MODE;
import upperBg from "../assets/PNG/bg/upperBg.png";
import instagram from "../assets/PNG/icons/Instagram.png";
import Discord from "../assets/PNG/icons/Discord.png";
import twitter from "../assets/PNG/icons/Twitter.png";
import { ColorExtractor } from "react-color-extractor";
import { keys } from "../../Key";
import { FooterNavigateContext } from "../context/FooterNavigate";
import axios from "axios";
const Footer = () => {
  const { to, setTo } = React.useContext(FooterNavigateContext);
  const { useState: state } = React;
  const [copied, setCopied] = state(false);
  const [path, setPath] = React.useState();
  const [footerBg, footerBginView] = useInView();
  const footerLinks = {
    content: [
      {
        Header: "LINK ",
        List: [
          "Policy",
          "terms of use",
          "about us",
          "history",
          "Why choose us?",
        ],
      },
      {
        Header: "MORE ",
        List: ["Charts", "How to use", "Copyright ", "Contact Us"],
      },
    ],
    icons: [
      {
        icon: instagram,
        link: "instagram",
        colors: [`#8a3ab9`, ` #8a3ab9`, `#4c68d7`],
      },
      {
        icon: Discord,
        link: "Discord",
        colors: [`#4c68d7`],
      },
      {
        icon: twitter,
        link: "Twitter",
        colors: [
          `#292f33
      `,
          `#ffffff`,
          `#e1e8ed`,
          `#66757f`,
        ],
      },
    ],
  };
  return (
    <div
      style={{
        background: footerBginView ? "white" : "transparent ",
        transition: "background 1200ms ease-in-out",
      }}
      ref={footerBg}
      className={`min-h-[550px] lg:h-[550px] h-[800px] lg:gap-y-0 sm:items-center  mt-[50px] z-[0]`}
    >
      <img />
      {/* Text And Artwork Footer Section */}
      <div
        className={`w-full flex-wrap   h-1/2 flex  text-black sm:items-center justify-center  sm:gap-y-[12px]`}
      >
        {/* artwork tbwo */}
        <span
          className={`w-[40%] sm:items-center lg:flex items-center justify-center hidden `}
          id="artwork"
        >
          HELLO
        </span>
        <span
          className={`w-[80%] lg:w-[60%] h-full  font-[raleway] flex flex-col justify-center gap-5 sm:text-center `}
        >
          <h2
            className={`font-[openSauce] text-[15px] text-center  max-w-[500px] lg:text-start `}
          >
            ABSTRACTION
          </h2>
          <p className={`text-[14px] max-w-[500px] lg:text-start  text-center`}>
            Our team has put in immense effort to bring you a secure and
            reliable platform powered by smart contracts. This cutting-edge
            technology ensures that all transactions on the site are
            transparent, tamper-proof, and executed exactly as programmed. Take
            advantage of this innovative solution by using our smart
            contract-based system for seamless and efficient transactions.
            Empower yourself with the power of decentralization and trust the
            technology behind our site
          </p>
        </span>
      </div>
      {/* Icons and links Footer Section */}
      <div
        className={`h-1/2 flex  flex-wrap lg:flex-row flex-col-reverse justify-center lg:m-y-[50px] items-center  gap-y-[35px]  `}
      >
        <span
          id="contactIcons"
          className="w-full  lg:w-[40%]  gap-x-[60px]  flex items-center flex-wrap justify-center lg:p-0 p-8 lg:flex-col gap-[12px] lg:gap-y-[5px] "
        >
          <p
            className={`absolute font-[raleway] text-[12px]  translate-y-[-40px] px-[5px] py-[3] lg:translate-x-[105px] lg:translate-y-0 bg-green-500 rounded-[2px] ${
              copied ? "flex" : "hidden"
            } `}
          >
            copied to clipboard
          </p>
          {footerLinks.icons.map((icon) => {
            return (
              <div key={icon.link}>
                <img
                  title={copied && "copied to clipboard"}
                  style={{
                    transition: "filter 300ms ease-in-out",
                  }}
                  onClick={({ target }) => {
                    navigator.clipboard.writeText(icon.link);
                    target.style.filter = "drop-shadow(0 0 20px green)";
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                      target.style.filter = "none";
                    }, 2000);
                  }}
                  onMouseOver={({ target }) =>
                    (target.style.filter = `drop-shadow(0 0 20px ${
                      icon.colors[icon.colors.length - 1]
                    })`)
                  }
                  onMouseLeave={({ target }) => (target.style.filter = `none`)}
                  className={`lg:w-[58px] w-[50px] `}
                  src={icon.icon}
                />
              </div>
            );
          })}
        </span>
        <span
          id="links"
          className={`text-black gap-[150px]  w-[60%] flex justify-between   lg:justify-start   items-start  `}
        >
          {footerLinks.content.map((list, index) => (
            <div key={list.Header} className={`gap-y-[10px] flex flex-col `}>
              <h2 className={`font-[openSauce] text-[19px] `}>{list.Header}</h2>
              <hr className={`h-[2px] bg-black w-[65px] `} />
              <ul>
                {list.List.map((x, index) => (
                  <li
                    onClick={() => setTo(x)}
                    key={x}
                    className={`text-black cursor-pointer  my-[5px] font-[raleway] hover:translate-x-[8px] hover:text-blue-500 transition-all duration-200 truncate `}
                  >
                    <Link to={"/Explore"}>{x}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
