import React from "react";
import { useInView } from "react-intersection-observer";
import star from "../../../assets/PNG/addon/Start.png";
export default function () {
  const WhatWeHaveToOffer = [
    {
      title: "User-friendly interface",
      text: `One of the main features of our website is its user-friendly interface. We understand that the majority of our users may not be familiar with smart contracts or blockchain technology. As a result, our website has been designed to be easy to navigate and understand. Users can easily create, deploy, and interact with their smart contracts without needing any prior technical knowledge.`,
    },
    {
      title: "Seamless Crypto Transition",
      text: `One of the key features of our website is its ability to seamlessly transition crypto assets across the Ethereum blockchain. We understand that crypto users may have multiple wallets and platforms, and transferring funds between them can be a tedious and time-consuming process. Our website streamlines this process and makes it easier for users to transition their funds quickly and securely.`,
    },
    {
      title: "Secure and Transparent",
      text: `Security is paramount when it comes to crypto transactions. Our website has been built on top of blockchain technology, making it extremely secure and transparent. The use of smart contracts ensures that all transactions are executed without the need for intermediaries, eliminating the risk of fraud or manipulation. Additionally, our platform guarantees privacy and confidentiality for users, making it a safe environment to conduct transactions.`,
    },
    {
      title: "Competitive Pricing",
      text: `Another reason our website stands out is its competitive pricing. Traditional banking systems and intermediaries can charge high fees for transferring funds between different platforms. Our platform offers competitive pricing to our users, enabling them to save money while getting their transactions executed efficiently.`,
    },
  ];
  const [SpecialText, SpecialTextinView] = useInView();

  return (
    <div
      ref={SpecialText}
      className=" my-[30px] ml-10 w-full flex items-center justify-center flex-col p-[25px] scroll-smooth gap-y-[30px]"
    >
      <img
        style={{
          opacity: SpecialTextinView ? 1 : 0,
          transition: "opacity 1000ms ease-in",
        }}
        src={star}
        className={"h-[270px] self-center my-[20px]  w-auto"}
      />
      <div
        className={`flex items-start w-full   flex-col justify-center lg:justify-between text-start mb-[10px]`}
      >
        <h2 className={`font-[spartan] uppercase text-[30px] `}>
          Revolutionizing Crypto Transactions:{" "}
        </h2>
        <p className="font-[raleway]  text-[15px] min-w-[280px] max-w-[500px] text-gray-300">
          What Makes Our Small Smart Contract Website Special?
        </p>
      </div>

      <div className={`flex items-start flex-col justify-start w-full`}>
        {WhatWeHaveToOffer.map((service, index) => (
          <div
            style={{
              opacity: SpecialTextinView ? 1 : 0,
              translate: SpecialTextinView ? "0 0 " : ` -${index * 15}px 0px`,
              transition: `opacity 700ms ${index * 1000}ms  , translate 300ms ${
                index * 1000
              }ms ease-in-out`,
            }}
          >
            <h2
              key={service.title}
              className="font-[openSauce] font-semibold text-[19px] my-[16px]"
            >
              {index + 1 + " - " + service.title}
            </h2>

            <p className="font-[raleway] max-w-[680px]">{service.text}</p>
          </div>
        ))}
        <div>
          <h2></h2>
        </div>
      </div>
    </div>
  );
}
/* 
Title: "Revolutionizing Crypto Transactions: What Makes Our Small Smart Contract Website Special?"

Cryptocurrencies have disrupted the financial world and have gained massive popularity in recent years. One of the main challenges that cryptocurrency users face is the process of transferring their funds between different wallets and platforms. Our small smart contract website offers a unique solution to this problem by allowing users to transition their crypto assets across the Ethereum blockchain. In this article, we’ll be breaking down what makes our website special and how we’re revolutionizing the world of crypto transactions.

Seamless Crypto Transition
One of the key features of our website is its ability to seamlessly transition crypto assets across the Ethereum blockchain. We understand that crypto users may have multiple wallets and platforms, and transferring funds between them can be a tedious and time-consuming process. Our website streamlines this process and makes it easier for users to transition their funds quickly and securely.

Secure Smart Contracts
Security is paramount when it comes to crypto transactions. Our website has been built on top of blockchain technology, making it extremely secure and transparent. The use of smart contracts ensures that all transactions are executed without the need for intermediaries, eliminating the risk of fraud or manipulation. Additionally, our platform guarantees privacy and confidentiality for users, making it a safe environment to conduct transactions.

Competitive Pricing
Another reason our website stands out is its competitive pricing. Traditional banking systems and intermediaries can charge high fees for transferring funds between different platforms. Our platform offers competitive pricing to our users, enabling them to save money while getting their transactions executed efficiently.

User-friendly Interface
We understand that the majority of our users may not be familiar with smart contracts or blockchain technology. As a result, our website has been designed to be easy to navigate and understand. Users can easily create, deploy, and interact with their smart contracts without needing any prior technical knowledge.

Excellent Customer Support
Customer support is crucial for any business, and we take it very seriously. Our team is dedicated to providing excellent customer service, and we are always available to assist our users with any questions or issues they may have. We believe that building a strong relationship with our users is crucial to the success of our platform.

Conclusion

Our small smart contract website offers a unique solution to the challenges that cryptocurrency users face when transitioning their funds across different platforms. With a seamless crypto transition process, secure smart contracts, competitive pricing, user-friendly interface, and excellent customer support, we stand out from our competitors. We are committed to providing our users with an exceptional experience and helping them achieve their crypto goals. Our platform is revolutionizing the world of crypto transactions, and we’re excited to be a part of it.*/
