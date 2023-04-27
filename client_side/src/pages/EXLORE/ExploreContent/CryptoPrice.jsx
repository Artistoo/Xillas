import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  Cell,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { PricesContext } from "../../../context/PricesAPI";
import Loading from "../../../components/Loader";

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer
      width={350}
      height={270}
      className={`lg:translate-x-0 -translate-x-[30px]`}
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke={"white"}
          fontFamily={"Raleway"}
          fontSize={15}
        />
        <YAxis tickFormatter={"toPercent"} stroke={"white"} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="priceHigh"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="priceLow"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
const RadarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width={350} height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 250]} />
        <Radar
          name="Price High"
          dataKey="priceHigh"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Price Low"
          dataKey="priceLow"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default function CryptoPrice() {
  /* Charts */
  const [Text, TextInView] = useInView();
  const [pricesChart, setPricesChart] = React.useState([]);
  const { Prices } = React.useContext(PricesContext);
  React.useEffect(() => {
    if (Prices?.data) {
      setPricesChart(Prices.data);
    }
  }, [Prices]);

  const data = React.useMemo(() => {
    return pricesChart.slice(0, 5).map((p) => ({
      name: p.name,
      priceHigh: p.metrics.all_time_high.price,
      priceLow: p.metrics.cycle_low.price,
    }));
  }, [pricesChart]);

  if (!Prices) {
  }

  const chartsStyling = `max-w-[450px] min-w-[380px]   rounded-[15px] flex flex-col items-center justify-center `;
  return (
    <div
      className={`flex flex-wrap w-full scroll-smooth  min-h-[420px]  justify-center items-center flex-col gap-y-[20px] `}
    >
      {!Prices ? (
        <>
          <Loading content={`charts data`} />
        </>
      ) : (
        <>
          <h2 className={`font-[Random] text-white text-[55px]`}>Charts</h2>
          <div
            id="charts"
            className={`flex items-center justify-center gap-x-[50px] w-full flex-wrap`}
          >
            <React.Suspense fallback={<Loading />}>
              <LineChartComponent data={data} />
            </React.Suspense>
            <React.Suspense fallback={<Loading />}>
              <RadarChartComponent data={data} />
            </React.Suspense>
          </div>
          <div
            ref={Text}
            className={`min-w-[400px] max-w-[600px] transition-all delay-100 my-[50px] `}
          >
            <p
              style={{
                opacity: TextInView ? 1 : 0,
                transition: "opacity 1000ms , translate 1200ms ease-in",
                translate: TextInView ? "0 0 " : "10 0",
              }}
              className={`font-[Raleway] text-grey-100 `}
            >
              The information you see represents the current prices of various
              cryptocurrency assets. As you may know, cryptocurrency has become
              an increasingly popular investment option in recent years. The
              prices of these digital assets can be highly volatile, and can
              fluctuate rapidly based on a variety of factors, including market
              demand and regulatory changes. We strive to provide accurate and
              up-to-date information on cryptocurrency prices so that you can
              make informed decisions about your investments. However, please
              keep in mind that these prices are subject to change at any time.
              If you have any questions or concerns about the data displayed
              above, please do not hesitate to reach out to us. We are here to
              help you navigate the world of cryptocurrency and make the most of
              your investments. Thank you for choosing our website as your
              source for cryptocurrency information.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

/* {Prices.data.slice(0, 5).map((p) => {
        return <>{p.metrics.all_time_high.price}</>;
      })} */
/* 



*/
