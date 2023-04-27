import React from "react";
import axios from "axios";
export const PricesContext = React.createContext();

export default function PricesAPI({ children }) {
  const [Prices, setPrices] = React.useState();
  axios
    .get("https://data.messari.io/api/v1/assets", {
      headers: {
        "x-messari-api-key": import.meta.env.VITE_MESSARI_KEY,
      },
    })
    .then((res) => setPrices((current) => (current = res.data)))
    .catch((err) => console.log(err));
  return (
    <PricesContext.Provider value={{ Prices }}>
      {children}
    </PricesContext.Provider>
  );
}
