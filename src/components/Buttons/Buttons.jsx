import { VscDebugStepInto, VscDebugStepOut } from "react-icons/vsc";
import css from "./Buttons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceReducer";
import clsx from "clsx";

export default function Buttons() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.balance.inpAmount);

  return (
    <div className={css.btnCont}>
      {amount === 0 ? (
        <button
          className={clsx(css.btn, amount === 0 && css.notActive)}
          disabled
        >
          <VscDebugStepInto className={css.icons} size="32" />
        </button>
      ) : (
        <button className={css.btn} onClick={() => dispatch(deposit(amount))}>
          <VscDebugStepInto className={css.icons} size="32" />
        </button>
      )}
      <button className={css.btn} onClick={() => dispatch(withdraw(3))}>
        <VscDebugStepOut className={css.icons} size="32" />
      </button>
    </div>
  );
}
