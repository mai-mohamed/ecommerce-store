import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import * as types from "./types";
import * as actions from "./actions";
import { setLoaderAction } from "../Server/actions";

function* getAllCategoriesSaga() {
  try {
    const response = yield call(api.getAllCategories);
    yield put(actions.getAllCategoriesResponse(response.data));
    yield put(setLoaderAction(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* categoriesSaga() {
  yield takeEvery(types.GET_ALL_CATEGORIES_ACTION, getAllCategoriesSaga);
}
