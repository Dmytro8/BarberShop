import { barbersReducer } from "./barbersReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { servicesReducer } from "./servicesReducer";

// import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
  servicesData: servicesReducer,
  barbersData: barbersReducer
});

// export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer);
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;
