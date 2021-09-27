import * as types from "./types";

const INITIAL_STATE = {
  allCategories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES_RESPONSE:
      return { ...state, allCategories: action.payload };

    default:
      return state;
  }
};
