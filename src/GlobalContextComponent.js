import React, { useState, createContext, useEffect } from "react";
export const GlobalContext = createContext();

const getViewPort = () => {
    
  const viewPortSize = document.documentElement.clientWidth;
  if (viewPortSize < 480) {
    return "se";
  } else if (viewPortSize < 768) {
    return "mb";
  } else if (viewPortSize < 1200) {
    return "tl";
  } else {
    return "dt";
  }
};

const GlobalContextComponent = ({ children }) => {
  const [viewPort, setViewPort] = useState(getViewPort());

  useEffect(() => {
    const resizeHandler = () => {
      setViewPort(getViewPort());
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <GlobalContext.Provider value={{ viewPort }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextComponent;
