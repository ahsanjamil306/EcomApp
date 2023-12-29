import React from "react";
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";
// import Productpage from "./pages/productpage";
import App from "./App";
import Productpage from "./pages/Productpage";
import WishList from "./pages/WishList";
import LoginForm from "./pages/Loginform";
import RegisterForm from "./pages/Registrationform";
import Home from "./components/Home";

// import Productpage from "../src/pages/Productpage";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
        <Route exact path="/Login" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product-page" element={<Productpage />} />
        <Route exact path="/wish-list" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}
