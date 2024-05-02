import { useId, useState } from "react";
import css from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInpAmount } from "../../redux/balanceReducer";

export default function Input() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.balance.inpAmount);
  const inputId = useId();
  //   const [amount, setAmount] = useState(0);
  return (
    <div className={css.inpCont}>
      <label htmlFor={inputId}>Amount</label>
      <input
        className={css.inp}
        type="number"
        id={inputId}
        value={amount}
        onChange={(e) => {
          dispatch(setInpAmount(Number(e.target.value)));

          //   setAmount(e.target.value);
          //   console.log(amount);
        }}
      />
    </div>
  );
}
