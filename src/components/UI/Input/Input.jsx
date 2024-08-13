import cls from "../../../utils/cls";
import styles from "./Input.module.css";

const Input = ({ className, ...props }) => (
	<input className={cls(styles.input, className)} {...props} />
);

export default Input;
