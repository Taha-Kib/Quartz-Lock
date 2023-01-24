import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, [showLoading]);

  return (
    <AppContext.Provider
      value={{
        showLoading,
        setShowLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider }
