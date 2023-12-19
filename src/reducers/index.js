import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/index";

export const initalState = {
  products: [],
  id: 1,
};

const rootReducer = (state = initalState.products, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      state.splice(
        state.findIndex((p) => p.id === action.product.id),
        1
      );
    default:
      return state;
  }
};

export const getProducts = () => {
  return initalState.products;
};
export default rootReducer;
