import React from "react";
import Pages from "../PageExport";
import Header from "./header";
import Services from "./Services";
import Transaction from "./transaction";
import  History from './History'
import Learn from "./Learn";
import Donate from '../../components/Donate'
import '../../styling/index.css'
export default function home() {
  return (
    <>
      <Header />
      <Services />
      <Transaction />
      <History />
      <Learn />
      <Donate />
    </>
  );
}
