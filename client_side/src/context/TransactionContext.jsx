import React, { createContext, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import { contractABI, contractAddress } from "../utils/constants";
import { ErrorContext } from "./ErrorContext";
import MetaMaskIcon from "../assets/PNG/icons/MetaMask_Fox.svg.png";
import Error from "../components/Error";

export const TransactionContext = createContext();
const { ethereum } = window;

const getEthereumContract = async () => {
  const web3 = new Web3(ethereum); // class Web(){contructor(x) { this.x = x }}
  const accounts = await web3.eth.requestAccounts();
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  console.log({ accounts, contract });

  return contract;
};

/* 
  class Person(){
    constructor(x){
      this.x = x
    }
  }
  let newPerson = new Person({
    name : 'albert',
    lastName : 'daniel'
  })
  console.log(newPerson ) // {
    name : 'albert',
    lastName : 'daniel'
  }



*/

/* TransactionProvider */
//Provider
export const TransactionProivder = ({ children }) => {
  //States
  const [currentAccount, setCurrentAccount] = React.useState();
  const [Failed, setFailed] = React.useState(false);

  const [transactionData, setTransactionData] = React.useState(
    localStorage.getItem("data")
  );
  const [form, setForm] = React.useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [TransactionStatus, setTransactionStatus] = React.useState({
    isSending: false,
    Sent: false,
    Failed: false,
  });
  //Context
  const { error, setError } = React.useContext(ErrorContext);
  //useEffect
  React.useEffect(() => {
    const currentData = localStorage.getItem("data");
    if (!currentData) {
      localStorage.setItem("data", JSON.stringify([]));
    }
  }, []);
  //Functions
  const handleChange = (e, name) => {
    setForm((current) => ({ ...current, [name]: e.target.value }));
  };
  const WalletIsConnected = async () => {
    if (!ethereum)
      setError((current) => ({
        onClick: {
          type: "redirect",
          link: "https://metamask.io/",
          btn: "download wallet",
        },
        img: MetaMaskIcon,
        message: `an error occured while trying to connect to your wallet , make sure metaMask wallet is installed and try again `,
        type: "yellow",
        ...current,
      }));
    const accounts = await ethereum.request({ method: "eth_accounts" });
  };
  const connectWallet = async () => {
    try {
      if (!ethereum)
        setError((current) => ({
          img: MetaMaskIcon,

          message: `an error occured while trying to connect to your wallet , make sure metaMask wallet is installed and try again `,
          type: "yellow",
          ...current,
        }));
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (err) {
      setError((current) => ({
        message: err.message,
        type: "red",
        ...current,
      }));
    }
  };
  const sendTransactions = async () => {
    try {
      if (!ethereum) {
        setError((current) => ({
          img: MetaMaskIcon,
          message: `an error occured while trying to connect to your wallet , make sure metaMask wallet is installed and try again `,
          type: "yellow",
          ...current,
        }));
      }
      setTransactionStatus((current) => ({ ...current, isSending: true }));
      //destructing the items from the from submit
      const { addressTo, amount, keyword, message } = form;
      const transactionContract = await getEthereumContract();
      const ParsedAmount = Web3.utils.toWei(amount.toString(), "ether");
      const Hash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: Web3.utils.toHex(21000),
            value: ParsedAmount,
          },
        ],
      });

      //Managing loading state
      const transactionHash = await transactionContract.methods
        .addBlockchain(addressTo, ParsedAmount, message, keyword)
        .send({ from: currentAccount });

      const receipt = await ethereum.request({
        method: "eth_getTransactionReceipt",
        params: [Hash],
      });
      console.log(receipt);
      const transactionCount =
        await transactionContract.methods.getTransactionsCount();

      //Managing Loading State
      console.log(Hash);
      if (receipt && receipt?.status) {
        setTransactionStatus((currnet) => ({
          isSending: false,
          Sent: true,
          Failed: false,
        }));
        //Saving the transaction data to the localStroage
        const update = JSON.parse(localStorage.getItem(`data`));
        update.push({
          amount,
          message,
          from: currentAccount,
          to: addressTo,
          date: {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            hour: new Date().getHours(),
          },
          index: Math.round(Math.random() * 5),
          GasPrice: receipt.gasUsed * receipt.gasPrice,
        });
        localStorage.setItem("data", JSON.stringify(update));
      } else {
        setTransactionStatus((currnet) => ({
          isSending: false,
          Sent: false,
          Failed: true,
        }));
      }
    } catch (error) {
      setTransactionStatus((current) => ({
        ...current,
        Sent: false,
      }));
      switch (error.code) {
        case 4001:
          setError((current) => ({
            message: `Transaction Rejected `,
            type: "yellow",
            ...current,
          }));
        case -32602:
          setError((current) => ({
            message: `Please connect your Account`,
            type: "yellow",
            ...current,
          }));
        default:
          console.log(error);
      }
      if (error.message) setFailed(true);
      else setIsSending(false);
      console.log(error);
    }
  };

  useEffect(() => WalletIsConnected(), []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        handleChange,
        form,
        TransactionStatus,
        setForm,
        sendTransactions,
        transactionData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
