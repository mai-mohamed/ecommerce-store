import * as types from "./types";

export const getAllCategoriesAction = () => ({
  type: types.GET_ALL_CATEGORIES_ACTION,
});

export const getAllCategoriesResponse = (payload) => ({
  type: types.GET_ALL_CATEGORIES_RESPONSE,
  payload,
});
