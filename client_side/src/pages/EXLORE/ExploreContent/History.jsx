import React from "react";

export default function History() {
  const calcAge = () => {
    let yearsMonths = [];
    let suffix;
    let age = +new Date().getFullYear().toString().slice(2, 4) - 23;
    suffix = +age ? `year${age > 1 ? "s" : ""}` : `month${age > 1 ? "s" : ""}`;
    for (let i = age; i <= suffix.includes("month") ? 12 : age + 10; i++) {
      yearsMonths.push(i);
    }
    return yearsMonths;
  };
  console.log(calcAge());
  return (
    <div
      style={{
        background: "#ef8da7",
      }}
      className={`w-full ml-[25px] flex flex-col `}
    >
      <div className={`flex `}>
        <h2 id={"historyTitle"}>History of Xillas</h2>
      </div>
      <div id={"ageAnimationBox"} className={` h-[50px] aspect-square`}></div>
    </div>
  );
}
