import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { orderReducer } from "./reducers/orderReducer";

export const store = createStore(orderReducer, composeWithDevTools());
