import { VscDebugStepInto, VscDebugStepOut } from "react-icons/vsc";
import css from "./Buttons.module.css";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceReducer";

export default function Buttons() {
  const dispatch = useDispatch();
  return (
    <div className={css.btnCont}>
      <button className={css.btn} onClick={() => dispatch(deposit(10))}>
        <VscDebugStepInto className={css.icons} size="32" />
      </button>
      <button className={css.btn} onClick={() => dispatch(withdraw(3))}>
        <VscDebugStepOut className={css.icons} size="32" />
      </button>
    </div>
  );
}
