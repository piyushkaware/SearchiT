import React from "react";
// import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import StaticPage from "./Components/StaticPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/staticPage" element={<StaticPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
