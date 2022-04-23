import { isLoginReducer } from "./Logger/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  isLogin: isLoginReducer,
});

const middleware = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);
  next(action);
};

export const store = createStore(rootReducer, applyMiddleware(middleware));
