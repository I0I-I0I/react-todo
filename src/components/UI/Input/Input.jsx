import { forwardRef } from "react";
import cls from "../../../utils/cls";
import styles from "./Input.module.css";

const Input = forwardRef(({ className, ...props }, ref) => (
	<input className={cls(styles.input, className)} {...props} ref={ref} />
));

export default Input;
