import clsx from "clsx";
import css from "./Alert.module.css";

const Alert = ({ variant, children }) => {
  return <p className={clsx(css.alert, css[variant])}>{children}</p>;
};
export default Alert