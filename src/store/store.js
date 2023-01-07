import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loggerMiddleware } from "../middlewares/logger";
import rootReducer from "./rootReducer";

const middlewares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
  thunk,
].filter(Boolean);

const enhancedCompose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = enhancedCompose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
