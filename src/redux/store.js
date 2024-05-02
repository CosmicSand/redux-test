import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceReducer";

export const initialState = {
  balance: {
    value: 100,
    a: 5,
  },
};

const rootReducer = combineReducers({
  balance: balanceReducer,
});
export const store = createStore(rootReducer);
console.log(store.getState());
