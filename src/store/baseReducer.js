import { combineReducers } from "redux";
import products from "./Products/reducer";
import categories from "./Categories/reducer";
import server from "./Server/reducer";

export default combineReducers({
  products,
  categories,
  server,
});
