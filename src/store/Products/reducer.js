import * as types from "./types";

const INITIAL_STATE = {
  allProducts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS_RESPONSE:
      return { ...state, allProducts: action.payload };

    default:
      return state;
  }
};
