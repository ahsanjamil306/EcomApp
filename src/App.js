import "./App.css";
import Navbar from "../src/components/Navbar";
import Card from "./components/Card";
import { images, icons } from "../src/utils/assets";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { connect } from "react-redux";
function App(props) {
  const [search, setSearch] = useState("");
  let { products } = props;

  const cout_product = products.length;
  const productData = [
    {
      id: 1,
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      description: "Hello this product is very goood in test ",
      price: 300,
    },
    {
      id: 2,
      prodectImg: images.wallet,
      detail: "Lather Original wallet for men",
      price: 600,
    },
    {
      id: 3,
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: 300,
    },
    {
      id: 4,
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: 300,
    },
    {
      id: 5,
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: 300,
    },
    {
      id: 6,
      prodectImg: images.watch,
      detail: "Brand New Smart Watch 2023",
      price: 300,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className=" h-full w-screen">
      <Navbar
        isSearch={true}
        search={search}
        setSearch={setSearch}
        count={cout_product}
        isHome={true}
      />

      {/* PRODUCT IMAGES */}
      <div className="gap-2 flex flex-wrap justify-start p-10  ">
        <Card data={productData} search={search} />
      </div>

      {/* PRODUCT IMAGES */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state,
    // Add other reducer variables as needed
  };
};

export default connect(mapStateToProps)(App);
