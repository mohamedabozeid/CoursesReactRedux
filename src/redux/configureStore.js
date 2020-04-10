import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
import reduxImmutableStateInvariat from "redux-immutable-state-invariant";

export function configureStore(intialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducers,
    intialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariat()))
  );
}
