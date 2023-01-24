import React, { createContext, useState, useRef, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(false);
  const loadingRef = useRef(true);
  useEffect(() => {
    setTimeout(() => {
      loadingRef.current = false;
    }, 10000);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      // console.log(showLoading);
    }, 1500);
  }, [showLoading]);

  return (
    <AppContext.Provider
      value={{
        showLoading,
        setShowLoading,
        loadingRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export {AppContext, AppContextProvider}
