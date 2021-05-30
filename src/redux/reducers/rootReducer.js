import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderReducer } from "./orderReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["order"],
};

const rootReducer = combineReducers({
  order: orderReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
