import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { anime } from "react-anime";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
//JSX
export default function ({ Details }) {
  const navigate = useNavigate();
  //Ref
  const boxPolicy = React.useRef(null);
  const text_Logo = React.useRef([]);
  const texts = React.useRef([]);
  const PolicyContainer = React.useRef(null);
  //state
  const [options, setOptions] = useState({
    current: "",
    hovers: null,
    index: 0,
  });

  //Effect
  /* Animation */
  React.useEffect(() => {
    anime({
      targets: text_Logo.current,
      duration: 1100,
      opacity: [0, 1],
      translateY: ["100px", "0"],
      easing: "easeInOutCirc",
      delay: anime.stagger(1000),
    });
  }, []);

  //COMPONENTS ############
  const policyBoxOptions = [
    {
      title: "general",
      text: `
      Smart Contract Policy This policy sets out the terms and conditions
          that govern the use of our smart contract platform. By accessing and
          using our platform, you agree to be bound by these terms and
          conditions. Smart contracts are self-executing contracts with the
          terms of the agreement directly written into code. Our platform
          enables users to create, deploy, and interact with smart contracts.
          The platform is provided on an "as is" and "as available" basis and we
          do not guarantee that the platform will be available or error-free at
          all times. As a user of our platform, you are solely responsible for
          the creation and deployment of your smart contracts. We do not provide
          any legal or financial advice, and we do not assume any responsibility
          for the legal or financial consequences of your use of our platform.
          We also do not assume any responsibility for the security of your
          smart contracts. While we take reasonable measures to ensure the
          security of our platform, we cannot guarantee the security of your
          smart contracts or the funds associated with them. It is your
          responsibility to ensure the security of your smart contracts and the
          associated funds. We reserve the right to suspend or terminate your
          access to the platform at any time for any reason, including but not
          limited to your violation of these terms and conditions. By using our
          platform, you agree to indemnify and hold us harmless from and against
          any and all claims, damages, liabilities, costs, and expenses arising
          from or related to your use of the platform, including but not limited
          to the use of your smart contracts. This policy is governed by and
          construed in accordance with the laws of [insert governing law]. Any
          dispute arising out of or in connection with this policy will be
          subject to the exclusive jurisdiction of the courts of XILLAS.
      `,
    },
    {
      title: "info",
      text: `Secondly, we have implemented a privacy policy that governs our collection, use, and disclosure of personal information. We only collect the minimum amount of information necessary to provide our services and we do not sell, rent, or share your personal information with third parties without your consent. We also provide you with the ability to review and update your personal information at any time.
      we follow a strict code of conduct that requires all our employees to comply with our security and privacy policies. We regularly train our staff to ensure they understand our policies and are equipped to handle any security or privacy issues that may arise.

also we are committed to continuous improvement and regularly review our security and privacy policies to ensure they remain effective and up to date. We also work closely with independent security experts to identify and address any potential vulnerabilities or threats.

In conclusion, Xillas is committed to providing our users with the highest level of security and privacy. We have implemented industry-standard security measures, a comprehensive privacy policy, a strict code of conduct, and a commitment to continuous improvement. We understand that security and privacy are critical concerns for our users, and we take these concerns seriously. Thank you for choosing Xillas as your smart contract provider, and we look forward to serving you in the future.`,
    },
    {
      title: "topics",
      text: ` In this section, we provide you with detailed information about the various topics related to our services, such as the types of smart contracts we offer, our approach to security and privacy, and our terms of use.

      Our website provides a range of smart contracts designed to meet the needs of different industries and businesses. These include but are not limited to, contract templates for supply chain management, digital identity, and financial agreements. Each smart contract has been created with the utmost care and attention to ensure it meets the highest industry standards for reliability and security.`,
    },
    {
      title: "Type",
      text: `Our website is built using the Ethereum blockchain, which was developed using the Solidity programming language. In this article, we will provide you with more information about Solidity and how it is used to implement most of the functionality within our smart contract website.

      Solidity is a programming language specifically designed for writing smart contracts on the Ethereum blockchain. It is a high-level, contract-oriented language that enables developers to write secure and reliable smart contracts. Solidity is a popular choice for developing smart contracts due to its readability, efficiency, and ease of use.
      
      At Xillas, we use Solidity to implement most of the functionality within our smart contract website. Solidity enables us to create smart contracts that are secure, reliable, and scalable. We use Solidity to create smart contract templates for a range of industries, including supply chain management, digital identity, and financial agreements.
      
      One of the key advantages of using Solidity is its ability to perform automated contract enforcement. This means that our smart contracts can be automatically executed when certain conditions are met, without the need for intermediaries. This results in faster, more efficient transactions, and reduces the risk of errors or fraud.
      
      Solidity also enables us to create complex business logic within our smart contracts. For example, we can create smart contracts that automatically manage the distribution of assets, calculate fees and royalties, and enforce contract terms and conditions.
      
      In conclusion, Solidity is a powerful programming language that enables us to implement most of the functionality within our smart contract website. It provides a secure`,
    },
  ];
  return (
    <div
      ref={PolicyContainer}
      className={` my-[20px] relative flex items-start  lg:flex-row flex-col-reverse justify-start   scroll-smooth  min-w-[90%] `}
    >
      {/* Text Container */}
      <div
        ref={(e) => text_Logo.current.push(e)}
        id="policyText"
        className={` lg:max-w-[450px] max-w-[80%]    items-center flex self-center justify-center flex-col lg:text-start gap-y-[50px] `}
      >
        <div className={`max-w-[450px] break-all ml-[20px]`}>
          {policyBoxOptions.map((x, i) => (
            <>
              <p
                ref={(txt) => texts.current.push(txt)}
                className={`text-gray-900  font-[raleway]   text-[15px] break-words w-[90%] mb-[13px] ${
                  i == options.index ? "flex" : "hidden"
                }`}
              >
                {i == options.index && x.text}
              </p>
            </>
          ))}
        </div>
        <button
          style={{
            fontFamily:
              options.index + 1 == policyBoxOptions.length
                ? "raleway"
                : "openSauce",
          }}
          onClick={() => {
            options.index + 1 == policyBoxOptions.length
              ? Details({ DetailPage: "" })
              : setOptions({
                  index:
                    options.index + 1 < policyBoxOptions.length
                      ? (options.index += 1)
                      : (options.index = 0),
                });
          }}
          className={`border backdrop-blur-lg rounded-full w-[90%] text-[15px] bg-black bg-opacity-[0.2] group text-gray-200 px-[12px] py-[5px] flex items-center justify-center hover:bg-opacity-[0.4] duration-[500ms] ease-linear overflow-hidden  ${
            options.index + 1 == policyBoxOptions.length &&
            " bg-green-300 bg-opacity-100 text-gray-800  transition-all "
          }`}
        >
          {options.index + 1 !== policyBoxOptions.length
            ? `what else should i know ?`
            : "Explore More"}{" "}
          <p
            className={`lg:flex hidden group-hover:translate-y-[0%] translate-y-[-110%] bg-purple-400 bg-opacity-25 h-[80%] w-max rounded-full absolute right-[5px] transition-transform lg:py-[2px] py-[4px] lg:px-[10px] px-[15px] text-[raleway] text-white delay-[1000ms]  items-center justify-center text-[14px] ${
              options.index + 1 == policyBoxOptions.length &&
              `translate-y-0 text-[openSauce] text-gray-900 px-[30px] `
            } `}
          >
            {options.index + 1 < policyBoxOptions.length
              ? `read more`
              : "/Explore"}
          </p>
        </button>
      </div>

      {/* Policy Options Container */}
      <div
        id="policyArtwork"
        className={`h-full lg:sticky relative top-0 items-center justify-center flex lg:mr-[70px]  my-[20px]  lg:max-w-[48%] w-full lg:w-[420px] flex-col gap-y-[80px] lg:gap-y-[50px] text-[14px]  
       `}
      >
        <h2
          className={`font-[reey] text-[80px] lg:min-h-[230px] flex items-center justify-center text-center  text-black select-none filter drop-shadow-lg shadow-black`}
        >
          Policy
          {policyBoxOptions.map((x) => (
            <p
              className={`absolute text-purple-400 text-[50px] translate-x-14 translate-y-[50px]  ${
                x == policyBoxOptions[options.index || 0] ? "flex" : "hidden"
              }`}
            >
              {x.title}
            </p>
          ))}
        </h2>
        {/* Options */}
        <div
          ref={boxPolicy}
          className={`  p-[4px] flex items-center justify-start gap-[6px] lg:gap-[10px] font-[raleway]  lg:w-[70%] lg:mb-0 mb-[20px] flex-col lg:translate-x-0 translate-x-[-20px] `}
        >
          {/* TextArtwork */}
          <div
            onClick={() =>
              options.display
                ? setOptions({
                    display: false,
                    current: options.current,
                    index: options.index,
                  })
                : setOptions({
                    display: true,
                    current: options.current,
                    index: options.index,
                  })
            }
            className={`flex justify-between items-center font-[raleway] group text-start w-full max-w-[350px] text-[15px] text-gray-900 cursor-pointer `}
          >
            <p className="self-start">check more Policy information </p>
            <IoIosArrowDropdown
              className="cursor-pointer group-hover:fill-white"
              style={{
                rotate: options.display ? "180deg" : "360deg",
                transition: "fill 120ms , rotate 200ms ease-in",
              }}
              size={22}
            />
          </div>
          {/* options */}
          <div
            className={`flex flex-row   gap-x-[35px] lg:gap-x-[15px]  translate-y-[12px] `}
          >
            {policyBoxOptions.map((x, indexPolicy) => {
              return (
                <p
                  onClick={() => {
                    setOptions({ current: x, index: indexPolicy });
                    PolicyContainer.current.scrollTop =
                      PolicyContainer.current.style.height;
                  }}
                  onMouseOver={() =>
                    setOptions({
                      hovers: indexPolicy,
                      display: options.display,
                      current: options.current,
                      index: options.index,
                    })
                  }
                  onMouseLeave={() =>
                    setOptions({
                      hovers: null,
                      display: options.display,
                      current: options.current,
                      index: options.index,
                    })
                  }
                  key={`optionsPolicyPage${x.title}`}
                  style={{
                    border: `solid ${
                      options.current?.title == x.title
                        ? "skyblue 2px"
                        : "transparent 2px"
                    } `,
                    opacity: options.display
                      ? options.hovers
                        ? options.hovers == indexPolicy
                          ? 1
                          : 0.5
                        : 1
                      : 0,
                    transition: `opacity 300ms ${
                      indexPolicy * 50
                    }ms ease-in-out`,
                  }}
                  className={`px-[9px] py-[3px] hover:bg-opacity-[0.8] border hover:border-white   tranisiton-all rounded-full   cursor-pointer bg-black backdrop-blur-lg  bg-cover bg-center text-white duration-[500ms] bg-opacity-[0.5] ${
                    !options.display && "pointer-events-none"
                  }`}
                >
                  {x.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
