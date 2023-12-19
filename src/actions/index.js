import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/index";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  product,
});
