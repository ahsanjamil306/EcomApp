import React from "react";
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";
// import Productpage from "./pages/productpage";
import App from "./App";
import Productpage from "./pages/Productpage";

// import Productpage from "../src/pages/Productpage";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/product-page" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
  );
}
