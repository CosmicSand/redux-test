import { initialState } from "./store";

export const deposit = (amount) => {
  return {
    type: "balance/deposit",
    payload: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: "balance/withdraw",
    payload: amount,
  };
};
export const setInpAmount = (amount) => {
  return {
    type: "balance/setInpAmount",
    payload: amount,
  };
};

export const balanceReducer = (state = initialState.balance, action) => {
  console.log(action);
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };
    case "balance/setInpAmount":
      return {
        ...state,
        inpAmount: action.payload,
      };
    default:
      return state;
  }
};
