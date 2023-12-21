import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { images, icons } from "../utils/assets";
import { addProduct, removeProduct } from "../actions/index";
import { connect } from "react-redux";
import store from "../index";
const WishList = (props) => {
  let { products } = props;
  console.log("======>>>>>>>> WishList page ", products);

  const cout_product = products.length;

  //Calculating total price
  function calculateTotalAmount(items) {
    // Check if the array is not empty
    if (items.length === 0) {
      return 0; // If the array is empty, return 0
    }

    // Use the reduce function to calculate the total amount
    const totalAmount = items.reduce((acc, currentItem) => {
      // Check if the current item has a "price" property
      if (currentItem.hasOwnProperty("price")) {
        // Add the price of the current item to the accumulator
        return acc + currentItem.price;
      } else {
        // If the current item doesn't have a "price" property, return the accumulator unchanged
        return acc;
      }
    }, 0); // Start with an initial accumulator value of 0

    return totalAmount;
  }
  const totalAmount = calculateTotalAmount(products);

  return (
    <div className="h-screen ">
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
                {/* <p className="text-[16px] font-bold mt-2">large</p> */}
                <p
                  onClick={() => store.dispatch(removeProduct(prod))}
                  className="cursor-pointer text-end text-[18px] text-red-500 font-bold"
                >
                  Remove
                </p>
              </div>
            </div>
            <hr className="w-[60%] h-1 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
        );
      })}
      {products.length > 0 ? (
        <>
          <div className="  w-[60%] mx-auto flex justify-between text-[20px] text-black font-bold">
            <p>Total</p>
            <p>${totalAmount}</p>
          </div>
          <button
            onClick={() => alert("Check out is working")}
            className="my-10 bg-blue-700 text-white font-bold flex items-center justify-center w-[60%] mt-4 rounded-lg p-3 mx-auto hover:bg-blue-500:"
          >
            Check Out
          </button>
        </>
      ) : (
        <div className="mx-auto text-red-500 font-bold flex items-center justify-center  w-screen mt-20">
          Please Add some item in wish List{" "}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state,
    // Add other reducer variables as needed
  };
};

export default connect(mapStateToProps)(WishList);
