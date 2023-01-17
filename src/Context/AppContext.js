import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        showLoading,
        setShowLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export {AppContext, AppContextProvider}
