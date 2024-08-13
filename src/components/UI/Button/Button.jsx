import cls from "../../../utils/cls";
import styles from "./Button.module.css";

const variants = {
	add: styles.buttonAdd,
	edit: styles.buttonEdit,
	remove: styles.buttonRemove,
	close: styles.buttonClose,
	save: styles.buttonSave,
	default: styles.buttonDefault,
};

const Button = ({ children, className, variant = "default", ...props }) => (
	<button
		className={cls(styles.button, className, variants[variant])}
		{...props}
	>
		{children}
	</button>
);

export default Button;
