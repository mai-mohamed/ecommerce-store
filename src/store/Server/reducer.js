import * as types from "./types";

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LOADER_ACTION:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
