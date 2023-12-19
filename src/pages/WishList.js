import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { images, icons } from "../utils/assets";

import { connect } from "react-redux";
const WishList = (props) => {
  let { products } = props;
  // console.log("======>>>>>>>>", products);

  const cout_product = products.length;
  return (
    <>
      <Navbar search={false} count={cout_product} />

      <div className="flex items-center justify-center text-[40px] font-bold mt-10">
        Wish List
      </div>

      {products.map((prod, id) => {
        return (
          <div key={id}>
            <hr className="w-[60%] h-1 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="w-full flex  align-middle border-black gap-2 justify-center h-32 mt-10">
              <div className="h-32 w-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <img
                  src={prod.prodectImg}
                  alt="product-img"
                  className=" bg-contain "
                />
              </div>
              <div className=" pl-4 w-[50%]">
                <div className="flex justify-between">
                  <p className="text-[20px] font-bold">{prod.detail}</p>
                  <p className=" text-end font-bold text-[20px]">
                    ${prod.price}
                  </p>
                </div>

                <p className="text-[12px] text-grey-400 w-[80%]">
                  {prod.description}
                </p>
                <p className="text-[16px] font-bold mt-2">large</p>
                <p className="text-end text-[18px] text-red-500 font-bold">
                  Remove
                </p>
              </div>
            </div>
            <hr className="w-[60%] h-1 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
        );
      })}
      <div className="  w-[60%] mx-auto flex justify-between text-[20px] text-black font-bold">
        <p>Total</p>
        <p>$999</p>
      </div>
      <button
        onClick={() => alert("Check out is working")}
        className="bg-blue-700 text-white font-bold flex items-center justify-center w-[60%] mt-4 rounded-lg p-3 mx-auto hover:bg-blue-500:"
      >
        Check Out
      </button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state,
    // Add other reducer variables as needed
  };
};

export default connect(mapStateToProps)(WishList);
