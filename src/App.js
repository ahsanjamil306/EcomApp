import "./App.css";
import Navbar from "../src/components/Navbar";
import Card from "./components/Card";
import { images, icons } from "../src/utils/assets";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const productData = [
    {
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      description: "Hello this product is very goood in test ",
      price: "300",
    },
    {
      prodectImg: images.wallet,
      detail: "Lather Original wallet for men",
      price: "700",
    },
    {
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: "300",
    },
    {
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: "300",
    },
    {
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: "300",
    },
    {
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: "300",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className=" h-full w-screen">
      <Navbar isSearch={true} search={search} setSearch={setSearch} />

      {/* PRODUCT IMAGES */}
      <div className="gap-2 flex flex-wrap justify-start p-10 ">
        <Card data={productData} search={search} />
      </div>

      {/* PRODUCT IMAGES */}
    </div>
  );
}

export default App;
