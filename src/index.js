import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./RouteConfig";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const middleware = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteConfig>
        <App />
      </RouteConfig>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store;
