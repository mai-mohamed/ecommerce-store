import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reGET_LOGIN_SUBMITTED_DATA

reportWebVitals();
