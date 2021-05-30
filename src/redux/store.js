import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
import { persistedReducer } from "./reducers/rootReducer";

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
