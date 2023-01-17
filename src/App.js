import React from "react";
import { AppContextProvider } from "./Context/AppContext";
import StartApp from "./StartApp";

function App() {
  return (
    <AppContextProvider>
      <StartApp />
    </AppContextProvider>
  );
}

export default App;
