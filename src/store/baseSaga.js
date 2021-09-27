import { all } from "redux-saga/effects";
import productsSaga from "./Products/saga";
import categoriesSaga from "./Categories/saga";

export default function* baseSaga() {
  yield all([productsSaga(), categoriesSaga()]);
}
