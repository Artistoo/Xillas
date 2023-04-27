import React from "react";
/* import Lib */
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
/* Styling */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

//import icons
import { BiHomeSmile as Home } from "react-icons/bi";
import { BsFillPatchQuestionFill as About } from "react-icons/bs";
import { MdOutlineMenuBook as Sections } from "react-icons/md";

import { FiChevronDown } from "react-icons/fi";
/* importing Asset */
import BlurMenuBg from "../assets/PNG/bg/BlurMenuBG.png";
import Thumb from "../assets/PNG/addon/Thumb.png";
import DisplayLogo from "../../public/LOGO DISPLAY.png";
//importing components
import Works from "./work";
const NavBar = ({ position, Menu }) => {
  const [showIcon, setShadowIcon] = React.useState(false);
  const [showwWorks, setShowWorks] = React.useState({
    sticky: false,
    hero: false,
  });
  const { pathname } = useLocation();
  const [openMenu, setopenMenu] = Menu;
  const [hovering, setHovering] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState({ x: 0, y: 0 });
  const Navigation = {
    Main: [
      null,
      { title: "works", to: null },
      [
        {
          title: "start",
          to: { type: "scroll", target: "TransactionSection" },
        },
        { title: "we are", to: { type: "Navigate", target: "/Explore" } },
      ],
    ],
  };
  const currentPageTitles = () => {
    switch (pathname) {
      case "/":
        return [
          {
            title: "Header",
            to: {
              type: "scroll",
              target: "Header",
            },
            icon: "",
          },
          {
            title: "Services",
            to: {
              type: "scroll",
              target: "Services",
            },
            icon: "",
          },
          {
            title: "Transaction",
            to: {
              type: "scroll",
              target: "TransactionSection",
            },
            icon: "",
          },
          {
            title: "History",
            to: {
              type: "scroll",
              target: "History",
            },
            icon: "",
          },
          {
            title: "tutorial",
            to: {
              type: "scroll",
              target: "Tutorial",
            },
            icon: "",
          },
        ];
      case "/Export":
        return [{ title: null, to: "" }];
      default:
        return [{ title: "home", to: "" }];
    }
  };
  const NavBarContent = [
    { tag: "HOME", to: "/", icon: Home },
    { tag: "Explore", to: "/Explore", icon: About },
    {
      tag: "SECTIONS :",
      to: "",
      items: currentPageTitles(),
      icon: Sections,
    },
  ];
  /* Remove When Click outside the works  */
  React.useEffect(() => {
    const cancelshowOnClick = () => setShowWorks(false);
    if (showwWorks && !hovering)
      window.addEventListener("click", cancelshowOnClick);

    return () => {
      window.removeEventListener("click", cancelshowOnClick);
    };
  }, [hovering]);

  return (
    <>
      {/* sticky menu */}
      {pathname === "/" && (
        <div
          onMouseLeave={() => setHovering(false)}
          onMouseEnter={() => setHovering(true)}
          style={{ opacity: openMenu ? 0 : 1 }}
          id={`stickyMenu`}
          className={`absolute h-full w-full pointer-events-none`}
        >
          <div
            style={{
              transition: `translate 1000ms , position 1000ms , opacity 1000ms ease-in-out`,
              translate: position < 540 ? "0 -200%" : "0 0",
              position: "sticky",
              opacity: position < 540 ? 0 : 1,
            }}
            className={`top-2 m-auto pointer-events-auto backdrop-blur-[50px] p-1 flex items-center text-center justify-center max-w-[400px] w-[300px] min-h-[35px] rounded-[10px] font-[OpenSauce] mix-blend-difference bg-blue-900 bg-opacity-20 gap-14 text-[15px] lowercase flex-row z-[9000]`}
          >
            {/* WORKS */}
            <div className="relative group cursor-pointer">
              <p
                onClick={() =>
                  setShowWorks({ ...showwWorks, sticky: !showwWorks.sticky })
                }
                to={`/Explore`}
              >
                {Navigation.Main[1].title}
              </p>
              {/* ARROW */}
              <div className={`absolute  h-[3px] w-full top-full flex `}>
                {/* Arrow one */}

                <span
                  style={{
                    transition: `transform 300ms , ${
                      !showwWorks && `filter 100ms`
                    } ease-in-out`,
                  }}
                  className={` bg-blue-200 h-full w-1/2 origin-right ${
                    showwWorks.sticky
                      ? " rotate-[35deg] scale-x-[0.5]  translate-y-[7px] blur-[0.3px] "
                      : "group-hover:blur-[10px] blur-[30px]"
                  }`}
                />
                {/* Arrow two */}
                <span
                  style={{
                    transition: `transform 300ms , ${
                      !showwWorks && `filter 100ms`
                    }  ease-in-out`,
                  }}
                  className={` bg-blue-200 h-full w-1/2 origin-left ${
                    showwWorks.sticky
                      ? "rotate-[-35deg] scale-x-[0.5]  translate-y-[7px] blur-[0.3px]"
                      : " group-hover:blur-[10px] blur-[30px]"
                  }`}
                />
              </div>
              <Works
                sticky={true}
                setShow={setShowWorks}
                show={showwWorks.sticky}
              />
            </div>
            {Navigation.Main[2].map((x) => {
              if (x.to.type === "scroll") {
                return (
                  <Link
                    smooth={true}
                    duration={1000}
                    className={`cursor-pointer`}
                    to={x.to.target}
                  >
                    {x.title}
                  </Link>
                );
              }
              return <NavLink to={x?.to?.target}>{x?.title}</NavLink>;
            })}
          </div>
        </div>
      )}

      {/* small screen #SIDE# NavBar */}
      <div
        className={`h-full absolute w-max right-0 pointer-events-none z-[2500]`}
      >
        {/* MENU */}
        <div
          style={{
            transition: `transform 250ms ease-in`,
          }}
          className={` w-max flex-col min-h-screen min-w-[370px] bg-black bg-opacity-[0.9]  top-0 sticky gap-y-[35px] backdrop-blur-lg pointer-events-auto  overflow-hidden ${
            openMenu ? `translate-x-[0]  flex` : `translate-x-[120%] hidden`
          }`}
        >
          <div
            className={`bg-blue-900 w-full h-[99%]  absolute bottom-0 blur-lg opacity-[0.1] mix-blend-difference`}
          />

          {/* NAVIGATION Text */}
          <h2 className={`font-[openSauce] text-[25px] ml-[15px] relative`}>
            Navigation :{" "}
          </h2>
          {/* Menu Options */}
          <div className={`gap-y-[12px] flex flex-col flex-wrap relative`}>
            {NavBarContent?.map((item, index) => {
              return (
                //Menu Links
                <NavLink
                  key={`SideMenuOptions${index}`}
                  to={item.to}
                  className={` flex items-center justify-start max-w-[300px] gap-x-[15px] ml-[19px] h-max p-[10px] flex-wrap gap-y-[20px] cursor-auto `}
                >
                  <item.icon
                    style={{
                      transition: `transform 350ms ${
                        index * 100
                      }ms ,opacity 800ms ease-in `,
                    }}
                    className={`w-[20px] h-[20px] ${
                      openMenu
                        ? `translate-x-0 opacity-[1]`
                        : `translate-x-[-50px] opacity-[0]`
                    }`}
                  />
                  <p
                    style={{
                      transition: `transform 350ms ${
                        index * 150
                      }ms ,color 100ms  ,opacity 800ms ease-in `,
                    }}
                    className={`hover:text-gray-200 hover:translate-x-[5px] font-[Raleway] text-[15px] cursor-pointer ${
                      openMenu
                        ? `translate-x-0 opacity-[1]`
                        : `translate-x-[50px] opacity-[0]`
                    }`}
                  >
                    {item.tag}
                  </p>
                  {/* SECTIONS */}
                  {item.tag.includes(`SECTIONS`) && (
                    <div
                      className={` w-[300px] h-max p-[10px] gap-y-[15px] flex flex-wrap z-[10]`}
                    >
                      {item.items instanceof Object &&
                        item.items.map((option, optionIndex) => (
                          <Link
                            smooth={true}
                            duration={1000}
                            style={{
                              transition: `box-shadow 1500ms ease-in-out`,
                            }}
                            to={option.to.target}
                            className={`border mx-[5px]  px-[8px] py-[1px] rounded-full bg-white   bg-opacity-[0.9] hover:shadow-sm hover:shadow-pink-300 pointer-events-auto hover:bg-gray-200 text-[14px] text-gray-800 cursor-pointer`}
                          >
                            {option.title}
                          </Link>
                        ))}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
          {/* FOOTER */}
          <div
            className={` absolute flex overflow-hidden items-center justify-center p-[15px] w-full  bottom-0 gap-x-[20px]`}
          >
            <span className={` flex items-center justify-center  w-[30%]`}>
              <img
                src={Thumb}
                className={`w-[120px] h-[120px]border absolute `}
              />
            </span>

            <span
              className={`w-[60%]  h-full font-[Raleway] text-gray-300 text-[12px]  `}
            >
              <div className={`flex gap-x-[15px] items-center `}>
                <p>Experience secure </p>
                <p className={`text-[23px] translate-y-[-5px] text-blue-400 `}>
                  &
                </p>
              </div>

              <p>Efficient smart contract solutions with our trusted team</p>
            </span>
          </div>
        </div>
      </div>
      {/*Main Navigation Section */}
      <div
        id={`NavigationBar`}
        className={`h-[60px] flex flex-col justify-center `}
      >
        {/* Large Screen Menu */}
        <div
          id={`lg`}
          className={`h-full lg:flex hidden w-[100%]  items-center justify-between gap-[20px] font-[raleway] text-[17.8px] z-[9000]`}
        >
          {/* Logo */}
          <NavLink to={"/"}>
            <img
              src={DisplayLogo}
              className={`h-[50px] mt-2 w-auto mx-[35px] `}
            />
          </NavLink>
          {/* menu */}
          <div className={`w-1/2 flex gap-[200px] `}>
            {/* Work */}
            <div
              onMouseOver={() => setShowWorks(true)}
              onMouseLeave={() => setShowWorks(false)}
              className={`cursor-pointer relative flex items-center justify-center flex-col group  `}
            >
              {/* works text */}
              <p>{Navigation.Main[1]?.title}</p>
              {/* arrow down */}
              <FiChevronDown
                size={24}
                style={{
                  transition: `transform 200ms , opacity 250ms ease-in-out`,
                }}
                className={`absolute opacity-0  group-hover:opacity-[1] group-hover:translate-y-[20px]`}
              />
              <Works setShow={setShowWorks} show={showwWorks} />
            </div>

            {/* start And About */}
            <div className={`flex gap-[105px] `}>
              {Navigation.Main[2].map((item, index) => (
                <p key={index} className="cursor-pointer select-none">
                  {item.to.type.includes(`Navigate`) ? (
                    <NavLink to={item.to.target}>{item.title}</NavLink>
                  ) : item.title.includes(`start`) ? (
                    <Link to={`TransactionSection`}>
                      <NavLink to={`/`}>{item.title}</NavLink>
                    </Link>
                  ) : (
                    <Link to={item.to.target} smooth={true}>
                      {item.title}
                    </Link>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Small Screen Menu */}
        <div
          onMouseLeave={() => setHovering(false)}
          onMouseEnter={() => setHovering(true)}
          id={`sm`}
          className={` lg:hidden flex items-center  justify-between z-[9000]`}
        >
          <NavLink to={"/"}>
            <img
              src={DisplayLogo}
              className={`h-[50px] mt-2 w-auto mx-[35px] `}
            />
          </NavLink>
          <div className={`w-1/2 flex justify-between`}>
            {/* WORKs */}
            <div
              className={`cursor-pointer relative flex items-center justify-center flex-col group text-[17px]`}
            >
              {/* works text */}
              <p>{Navigation.Main[1].title}</p>
              {/* ClickAble div */}
              <div
                role={"button"}
                onClick={() =>
                  setShowWorks({ ...showwWorks, hero: !showwWorks.hero })
                }
                className={`absolute w-[150%] z-[10] h-[150%] `}
              />
              {/* arrow down */}
              <FiChevronDown
                size={24}
                style={{
                  transition: `transform 200ms , opacity 250ms ease-in-out`,
                }}
                className={`absolute  ${
                  showwWorks.hero
                    ? `opacity-[1] translate-y-[21px]`
                    : `opacity-[0] translate-y-[0]`
                } `}
              />
              <Works setShow={setShowWorks} show={showwWorks.hero} />
            </div>
            {/* Menu open close ICON */}
            <div className="absolute z-[4000] h-full pointer-events-none  w-full left-0 flex items-start justify-end  translate-y-[-15px]">
              <div
                onClick={() => setopenMenu((current) => (current = !current))}
                className={`gap-1 flex flex-col translate-y-[15px]  mx-5   pointer-events-auto cursor-pointer ${
                  openMenu ? `top-[25px] sticky` : ""
                }`}
              >
                <div
                  style={{
                    transition: `transform 550ms ease-in-out`,
                  }}
                  className={`w-7 bg-white  h-[2px]  origin-center  ${
                    openMenu
                      ? `translate-y-[5.59px] scale-[0.7] rotate-[-45deg]`
                      : `rotate-0 scale-[1]`
                  }`}
                />
                <div
                  style={{
                    transition: `transform 550ms ease-in-out`,
                  }}
                  className={`w-7 origin-center bg-white h-[2px] ${
                    openMenu
                      ? `rotate-[45deg] scale-[0.7]`
                      : `rotate-0 scale-[1] `
                  }`}
                />
                <div
                  style={{
                    transition: `opacity 650ms , transform 350ms ease-in-out`,
                  }}
                  className={`w-7 bg-white h-[2px] ${
                    openMenu
                      ? `opacity-0 translate-y-[10px]`
                      : `opacity-[1] translate-y-[0px]`
                  } `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
