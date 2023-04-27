import React, { useContext } from "react";
/* import Asset */
import {
  Welcome,
  Footer,
  Services,
  NavBar,
  Loader,
  Online,
  Error,
  Donate,
} from "./components";
//Lib
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
//Components
import Pages from "./pages/PageExport";
import Background from "../src/assets/PNG/bg/bgArtwork.png";
import { TransactionContext } from "./context/TransactionContext";
import { ErrorContext } from "./context/ErrorContext";
function App() {
  //context
  const { value } = useContext(TransactionContext);
  const { error, setError } = useContext(ErrorContext);
  //states
  const { useState: state } = React;
  const [openMenu, setOpenMenu] = state(false);
  const [position, setPosition] = state(0);
  const [isOnline, setIsOnline] = state(window.navigator.onLine);
  const [LoadingPage, setLoadingPage] = state(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setPosition(~~window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  React.useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, [isOnline]);
  React.useEffect(() => {
    const loaded = () => {
      setLoadingPage(false);
    };
    window.addEventListener("load", loaded);
    return () => {
      window.removeEventListener("load", loaded);
    };
  }, []);
  return (
    <div
      id={`App`}
      className={` flex flex-col text-white min-h-screen  ${
        openMenu && "pointer-events-none "
      } `}
      style={{
        backgroundSize: "100% 100%",
        transition: "position 1500ms ease-in-out",
      }}
    >
      {LoadingPage ? (
        <Loader />
      ) : (
        <>
          {error?.message ? <Error error={error} setError={setError} /> : null}
          <Online isOnline={isOnline} />

          <NavBar position={position} Menu={[openMenu, setOpenMenu]} />
          <Routes>
            <Route index element={<Pages.home />}></Route>
            <Route path={"/Explore"} element={<Pages.Explore />}></Route>
          </Routes>
          <Donate />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
