import { useId, useState } from "react";
import css from "./Input.module.css";

export default function Input() {
  const inputId = useId();
  const [amount, setAmount] = useState(0);
  return (
    <div className={css.inpCont}>
      <label htmlFor={inputId}>Amount</label>
      <input
        className={css.inp}
        type="number"
        id={inputId}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          console.log(amount);
        }}
      />
    </div>
  );
}
