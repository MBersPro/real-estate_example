import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextComponent from "./GlobalContextComponent";
import Main from "./pages/Main";

const Router = () => {
  return (
    <GlobalContextComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </GlobalContextComponent>
  );
};

export default Router;
