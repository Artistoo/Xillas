import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styling/index.css";
import { BrowserRouter } from "react-router-dom";
import { TransactionProivder } from "./context/TransactionContext";
import PricesAPI from "./context/PricesAPI";
import ErrorProvider from "./context/ErrorContext";
import FooterNavigate from "./context/FooterNavigate";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorProvider>
    <FooterNavigate>
      <TransactionProivder>
        <PricesAPI>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </PricesAPI>
      </TransactionProivder>
    </FooterNavigate>
  </ErrorProvider>
);
