import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import HomeReducers from "./redux/home.reducers";
import MainReducers from "./redux/main.reducers";

const rootReducer = combineReducers({
  HomeReducers,
  MainReducers,
});

export default function generateStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
