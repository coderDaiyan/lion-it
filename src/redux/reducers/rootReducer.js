import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderReducer } from "./orderReducer";
import { reviewReducer } from "./reviewReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["order", "review"],
};

const rootReducer = combineReducers({
  order: orderReducer,
  review: reviewReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
