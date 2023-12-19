// store.js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index"; // Import your combined reducers
import { thunk } from "redux-thunk"; // Apply middleware if needed

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
