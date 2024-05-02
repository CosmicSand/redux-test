import { useSelector } from "react-redux";
import css from "./Text.module.css";

export default function Text() {
  const balance = useSelector((state) => state.balance.value);
  const staticValue = useSelector((state) => state.balance.a);
  return (
    <p className={css.text}>
      Some text here: {balance} and static value here: {staticValue}
    </p>
  );
}
