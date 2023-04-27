import PhoneTalk from "../../assets/PNG/addon/PhoneMidNighttalk .png";
import Star from "../../assets/PNG/addon/Start.png";
import SecondBoxBg from "../../assets/PNG/More/ArtworkBG.png";
import ThirdBoxTXT from "../../assets/PNG/TXT/NowOpen.png";
import PolicyTXT from "../../assets/PNG/TXT/PolicyTXT.png";
import { ExploreContentDetailPage } from "./ExploreContent/ExploreContentExport";
import celebrating from "../../assets/Videos/Celebrating.gif";
//calcing the website age
const calcAge = () => {
  const currentYear = 23;
  const age =
    parseInt(new Date().getFullYear().toString().slice(2, 4)) - currentYear;
  return !age ? 1 : age;
};
//returning true or false according to the screen size
const ScreenSize = () => {
  let LG = false;
  window.addEventListener("resize", () => {
    Resize.width = window.innerWidth;
    Resize.height = window.innerHeight;
    if (Resize.width > 738) {
      LG = true;
    } else {
      LG = false;
    }
  });
  return LG;
};

//738
const { innerHeight, innerWidth } = window;

export const Boxs = [
  /* 1 */
  {
    type: "text",
    id: "history",

    content: {
      text: [calcAge() + `year${calcAge() > 1 ? "s" : ""} `, `since Creation`],
    },
    detail: ExploreContentDetailPage.History,
    styling: {
      bg: "#ef8da7",
      color: "white",
      fonts: ["spartan", "raleway"],
      sizing: [{ lg: "2.2rem" }, { lg: "1rem" }],
      scrollBar: "pink",
      textAlign: "ceneter",
    },
    section: 1,
    className: "DefaultBox box",
  },
  /* 2 */
  {
    type: "text&Art",
    id: "",

    content: {
      text: [
        "Creators",
        "get to know what was the motive and what inpires us to create this site ",
      ],
      artwork: PhoneTalk,
      button: { text: "More", bg: "transparent", border: "green" },
    },
    detail: ExploreContentDetailPage.XillasAbout,

    styling: {
      bg: SecondBoxBg,
      color: "white",
      fonts: ["spartan", "raleway"],
      sizing: [
        { lg: "35px", sm: "30px" },
        { lg: "0.9rem", sm: "20px" },
      ],
      scrollBar: "skyblue",
    },
    section: 2,
    className: "Expend box",
  },
  /* 3 */
  {
    type: "Art",
    id: "",

    content: {
      artwork: ThirdBoxTXT,
    },
    detail: { art: celebrating },

    styling: {
      bg: "#f6c548",
      color: "white",
      fonts: [null],
      scrollBar: "yellow",
    },
    section: 3,
    className: "ExtendDown box",
  },
  /* 4 */
  {
    type: "Art",
    id: "",
    content: {
      artwork: ThirdBoxTXT,
    },

    detail: "",

    styling: {
      bg: "#7c97cd",
      color: "white",
      fonts: [null],
      scrollBar: "blue",
    },
    section: 4,
    className: "ShrinkUp box",
  },
  /* 5 */
  {
    type: "text",
    id: "history",

    content: {
      text: [
        "experance the power of blockchain",
        "BLOCK CHAIN",
        "get to know more about the block chain , different concepts suchs as ethereum and gaz",
      ],
    },
    detail: ExploreContentDetailPage.BlockChain,

    styling: {
      bg: "#fc5d93",
      color: "white",
      fonts: ["openSauce", "Bebas", "Raleway"],
      sizing: [{ lg: "10px" }, { lg: "38px" }, { lg: "10px" }],
      scrollBar: "purple",

      textAlign: "start",
    },
    section: 1,
    className: "DefaultBox box",
  },
  /* 6 */
  {
    type: "Art",
    id: "",

    content: {
      artwork: PolicyTXT,
    },
    detail: "",

    styling: {
      bg: "#f7892d",
      color: "white",
      fonts: [null],
    },
    section: 2,
    className: "ExtendLeft box",
  },
  /* 7 */
  {
    type: "Art",
    id: "about us",

    content: {
      artwork: Star,
    },
    detail: ExploreContentDetailPage.SpecialServices,
    styling: {
      bg: "transparent",
      color: "white",
      border: "green",
      fonts: [null],
    },
    section: 2,
    className: "ShrinkLeft box",
  },
  /* 8 */
  {
    type: "text",
    id: "Charts",
    content: {
      text: ["Charts", "check the pricing for a given Crypto Currency"],
    },
    detail: ExploreContentDetailPage.CryptoPrice,
    styling: {
      bg: "linear-gradient(to bottom, #1D1F20, #2D2D2D, #383838)",
      color: "white",
      fonts: ["Random", "Raleway"],
      sizing: [{ lg: "46px" }, { lg: "15px" }],
    },
    section: 4,
    className: "DefaultBox box",
  },
  /* 9 */
  {
    type: "text",
    id: "Policy",
    content: {
      text: ["Policy"],
    },
    detail: ExploreContentDetailPage.Policy,
    styling: {
      bg: "linear-gradient(to right, #00C9FF, #00FF88)",
      color: "black",
      fonts: ["Reey"],
      fill: "transparent",
      sizing: [{ lg: "40px" }],
      textAlign: "center",
    },
    section: 3,
    className: "ShrinkDown box",
  },
];
