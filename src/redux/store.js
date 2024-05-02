import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceReducer";

export const initialState = {
  balance: {
    value: 100,
    inpAmount: 0,
  },
};

const rootReducer = combineReducers({
  balance: balanceReducer,
});
export const store = createStore(rootReducer);
console.log(store.getState());
