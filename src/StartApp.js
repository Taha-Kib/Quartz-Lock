import React from "react";
import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import { AppContext } from "./Context/AppContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function StartApp() {
  const { showLoading, setShowLoading } = useContext(AppContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowLoading(false);
  //     console.log(showLoading);
  //   }, 1000);
  // }, []);

  return (
    <div>
      {showLoading === false ? (
        <Welcome />
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
