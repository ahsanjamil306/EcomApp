import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { images, icons } from "../utils/assets";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../actions";
import store from "../index";
const Productpage = (props) => {
  const { state } = useLocation();
  const [data, setData] = useState("");
  let { products } = props;

  const cout_product = products?.length;
  return (
    <>
      <Navbar search={false} count={cout_product} />
      <div className=" w-full  flex mt-10  p-4">
        <div className=" w-[50%] p-3">
          <h1 className="text-[30px] ml-5 font-bold">{state?.detail}</h1>
          <img
            className="h-full w-full flex items-center justify-center mt-5 bg-contain "
            src={state?.prodectImg}
            alt="product-image"
            loading="eager"
          />
        </div>
        <div className=" w-[50%] p-3 ">
          <div className="pl-8 font-bold text-[25px] mt-5 text-[#808080]">
            Product Description
          </div>
          <div className="px-8 mt-10">{state.description}</div>
          <div className="font-bold text-[20px] ml-8 mt-8">
            PRICE : Rs{state?.price}{" "}
          </div>
          <div className="flex items-center justify-between mt-10 ml-8">
            <button
              onClick={() => store.dispatch(addProduct(state))}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to wish List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
    // Add other reducer variables as needed
  };
};

export default connect(mapStateToProps)(Productpage);
