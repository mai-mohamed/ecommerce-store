import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import * as types from "./types";
import * as actions from "./actions";
import { GetAllUrlParams } from "../../utils/helpers";
import { setLoaderAction } from "../Server/actions";

function* getAllProductsSaga() {
  const allParams = GetAllUrlParams();
  let params = {};
  for (const entry of allParams) {
    params = { ...params, [entry[0]]: entry[1] };
  }
  try {
    const response = yield call(api.getAllProducts, params);
    yield put(actions.getAllProductsResponse(response.data));
    yield put(setLoaderAction(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* productsSaga() {
  yield takeEvery(types.GET_ALL_PRODUCTS_ACTION, getAllProductsSaga);
}
