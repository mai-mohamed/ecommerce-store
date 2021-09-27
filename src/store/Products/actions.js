import * as types from "./types";

export const getAllProductsAction = () => ({
  type: types.GET_ALL_PRODUCTS_ACTION,
});

export const getAllProductsResponse = (payload) => ({
  type: types.GET_ALL_PRODUCTS_RESPONSE,
  payload,
});
