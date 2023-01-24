import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { AppContext } from "./Context/AppContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function StartApp() {

  const { showLoading } = useContext(AppContext);

  return (
    <div>
      {showLoading === true ? (
        <LoadingScreen />
      ) : (
        <div>
          <Nav />
          <AnimatedRoutes />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default StartApp;
