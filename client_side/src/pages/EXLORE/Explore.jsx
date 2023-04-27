import React, { useEffect } from "react";
//Boxs Object
import { Boxs } from "./ExploreBoxs";
//components
import { Loader } from "../../components";
import { FooterNavigateContext } from "../../context/FooterNavigate";
//Libraries
import { useInView } from "react-intersection-observer";
import { anime } from "react-anime";
//icons
import { IoMdArrowBack } from "react-icons/io";
/* JSX */
export default function Explore() {
  //States
  const [Detail, setDetail] = React.useState({
    detailDisplay: false,
    DetailPage: "",
    style: {
      scrollBarColor: "",
      bg: "",
      fontColor: "",
    },
  });
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [pageLoader, setPageLoaded] = React.useState(true);
  const [showImg, setShowImage] = React.useState(false);
  const { to, setTo } = React.useContext(FooterNavigateContext);
  const [showSectionText, setShowSectionText] = React.useState(false);
  //Ref
  const Box = React.useRef([]);
  const DetailRef = React.useRef();
  const ExploreTXT = React.useRef(null);
  const contactImg = React.useRef(null);
  const BoxsContainer = React.useRef(null);
  //useEffect
  useEffect(() => {
    if (pageLoader) {
      window.scrollTo(0, null);
    }
    setPageLoaded(false);
  }, [pageLoader]);

  //Footer Links Navigation
  const toBox = React.useMemo(() => to, [to]);
  useEffect(() => {
    if (toBox && Boxs) {
      for (let i = 0; i < Boxs.length; i++) {
        if (Boxs[i].id.match(toBox)) {
          let selected = Boxs[i];
          console.log(selected);
          setDetail((current) => ({
            detailDisplay: true,
            DetailPage: selected?.detail,
            style: { bg: selected?.styling.bg },
            ...current,
          }));
          console.log(Detail.DetailPage);
        } else {
          setDetail((current) => ({
            ...current,
            DetailPage: "",
            detailDisplay: false,
          }));
        }
      }
    } else {
      setDetail((current) => ({
        ...current,
        DetailPage: Boxs[0].detail,
        detailDisplay: true,
      }));
    }
  }, [to]);

  React.useEffect(() => {
    const show = setTimeout(() => setShowSectionText(true), 3500);
    return () => {
      clearTimeout(show);
    };
  }, []);

  //Tracking the scrolling postion inside the Detail element
  useEffect(() => {
    const trackScroll = () => {
      setScrollPosition(DetailRef.current.scrollTop);
    };
    DetailRef.current.addEventListener("scroll", trackScroll);
  }, [scrollPosition]);

  //Components
  const Intoduction = () => (
    <>
      <div
        id="sectionIntroduction"
        className={`w-full flex items-center  lg:justify-start justify-center  relative`}
      >
        <h2
          className={`font-[openSauce] text-[36px] lg:text-[47px] lg:mx-[25px] relative lg:self-start text-center `}
        >
          Explore :{" "}
          <hr
            ref={ExploreTXT}
            style={{
              width: setShowSectionText ? "5%" : "110%",
            }}
            className={`-left-4 transition-all outline-none border-none absolute translate-y-0 top-0 bg-blue-700 h-full `}
          />
        </h2>
      </div>
    </>
  );

  //JSX
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      id={`Explore`}
      className={`min-h-[610px] max-w-[1300px] my-[110px] flex flex-col items-center justift-center gap-[13px] `}
    >
      {/* Introduction Section */}
      <Intoduction />
      {/* Boxs & Detail*/}
      <div
        id={"Boxs&Details"}
        className={` min-w-[520px]  justify-center items-center min-h-[300px] my-[45px]  max-w-[1300px] relative `}
      >
        {/* Detail */}
        <div
          style={{
            background: Detail?.style?.bg,
            opacity: Detail.detailDisplay ? 1 : 0,
            zIndex: Detail.detailDisplay ? 1100 : 500,
            transition: `opacity 1000ms 950ms , z-index 1000ms 950ms ease-in-out`,
          }}
          ref={DetailRef}
          className={`absolute items-start flex justify-center   overflow-y-scroll  overflow-x-hidden w-full h-full bg-transparnet  rounded-[10px] ${
            Detail?.style?.bg == "transparent" && " backdrop-blur-sm"
          }`}
        >
          <>
            {/* Arrow Back Container */}
            <div
              onClick={() => {
                setDetail({ DetailPage: "" });
                localStorage.setItem("targetBox", "none");
              }}
              className={`sticky w-[60px]  flex top-0 items-center z-[1500] justify-end group min-h-full `}
            >
              <IoMdArrowBack
                size={34}
                style={{
                  opacity: Detail.detailDisplay ? 1 : 0,
                }}
                className={`ArrowBefore p-[5px] rounded-full box-border group-hover:border bg-white
                group-hover:bg-opacity-[0.1] bg-opacity-0 group-hover:backdrop-blur-lg
                group-hover:mix-blend-hue transition-all group-hover:translate-x-[-10px]  z-50`}
              />
            </div>
            {/* Component Details */}
            {Detail.detailDisplay &&
              ((
                <Detail.DetailPage
                  scrollPosition={~~scrollPosition}
                  Details={setDetail}
                />
              ) || <Loader />)}
          </>
        </div>
        {/* BOXS */}
        <div
          ref={BoxsContainer}
          className="GridBoxs min-w-full justify-center min-h-full  max-w-[1300px] relative"
        >
          {Boxs.map((box, index) => {
            const { styling } = box;
            const { sizing } = styling;
            return (
              <div
                ref={(e) => Box.current.push(e)}
                key={`BoxN${index}`}
                onClick={
                  box.detail && !box.detail?.art
                    ? () => {
                        setDetail({
                          DetailPage: box.detail,
                          detailDisplay: true,
                          style: { bg: box.styling.bg },
                        });
                      }
                    : () => {
                        setShowImage(true);
                        const hideImg = setTimeout(
                          () => setShowImage(false),
                          5000
                        );
                        return () => {
                          clearTimeout(hideImg);
                        };
                      }
                }
                onMouseEnter={({ target }) =>
                  (target.style.scale = box.type != "text&Art" && "1.03")
                }
                onMouseLeave={({ target }) =>
                  (target.style.scale = box.type != "text&Art" && "1")
                }
                style={{
                  background:
                    index != 1 ? box.styling.bg : `url(${box.styling.bg})`,
                  border:
                    styling.bg == "transparent" && "solid yellowgreen thin ",
                  opacity: Detail.detailDisplay ? 0 : 1,
                  transition: `opacity 100ms ${index * 100}ms  ease-in-out`,
                  display: Detail.detailDisplay
                    ? setTimeout(() => {
                        return "none";
                      }, 1000)
                    : "flex",
                }}
                className={`${box.className}  z-[1000]  hover:box shadow-white cursor-pointer `}
              >
                {/* Type TEXT */}
                {box.type == "text" && (
                  <div
                    className={`flex flex-col events-none  items text-${box.styling.color} m-[2px] lg:mx-[5px] pointer-events-none`}
                  >
                    {box.type == "text" &&
                      box?.content?.text?.map((p, pindex) => (
                        <p
                          style={{
                            fontSize: sizing[pindex].lg,
                            textAlign: styling.textAlign,
                            fontFamily: box.styling.fonts[pindex] || "raleway",
                          }}
                        >
                          {p}
                        </p>
                      ))}
                  </div>
                )}

                {/* Type text&Art */}
                {box.type == "text&Art" && (
                  <div
                    onMouseEnter={({ target }) => {
                      contactImg.current.style.scale = "1.12";
                      contactImg.current.style.rotate = "5deg";
                    }}
                    onMouseLeave={({ target }) => {
                      contactImg.current.style.scale = "1";
                      contactImg.current.style.rotate = "0deg";
                    }}
                    className={`flex relative h-full items-center justify-center   ${
                      !box.type == " text&Art" && "hidden"
                    }`}
                  >
                    <>
                      <img
                        style={{
                          transformOrigin: "center ",
                          transition: `rotate 150ms , scale 150ms ease-in-out`,
                        }}
                        ref={contactImg}
                        src={box.content.artwork}
                        className={`  
                      absolute  max-w-[30%]  scale-50 lg:blur-none blur-[15px]  min-w-[400px] lg:translate-x-[-100px] botton-0 translate-y-[-0px] h-auto	 `}
                      />
                      {/* Text & Button */}
                      <div
                        className={`min-w-[120px] max-w-[160px] lg:left-0 absolute flex flex-col items-center  gap-y-[5px] z-[100]     lg:translate-x-[-30px] p-3`}
                      >
                        <>
                          {box.content.text.map((p, pindex) => (
                            <p
                              style={{
                                font: `${box.styling.sizing[pindex]?.lg} ${box.styling.fonts[pindex]}`,
                                color: box.styling.color,
                              }}
                            >
                              {p}
                            </p>
                          ))}
                          <button
                            className={` rounded-[16px] bg-yellow-200 my-[8px] tranlsate-y-[10px] py-[3px] px-[5px] min-w-[150px] font-[openSauce]`}
                          >
                            {box.content.button.text}
                          </button>
                        </>
                      </div>
                    </>
                  </div>
                )}

                {/* Type Art */}
                {box.type == "Art" && (
                  <div
                    className={` w-[200px] events-none pointer-events-none flex items-center justify-center`}
                  >
                    {/* onClick Celebration */}
                    <img
                      src={box.detail?.art}
                      className={`absolute min-w-[400px] ${
                        showImg ? `flex` : "hidden"
                      }`}
                    />
                    <img
                      style={{
                        filter: box.detail?.art && showImg && `blur(1px)`,
                        transition: `filter 1000ms ease-in`,
                      }}
                      src={box.content.artwork}
                      className={`w-full h-[100%] self-center `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
