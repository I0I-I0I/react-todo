import { forwardRef, useEffect } from "react";
import styles from "./TextAreaAutoSize.module.css";
import cls from "../../../utils/cls";

const TextAreaAutoSize = forwardRef(
	({ className, value, onChange, ...props }, ref) => {
		const resizeTextArea = () => {
			ref.current.style.height = "auto";
			ref.current.style.height = ref.current.scrollHeight + "px";
		};

		useEffect(resizeTextArea, [value, ref]);

		return (
			<textarea
				className={cls(styles.textAreaAutoSize, className)}
				ref={ref}
				value={value}
				onChange={onChange}
				rows={2}
				{...props}
			/>
		);
	},
);

TextAreaAutoSize.displayName = "TextAreaAutoSize";

export default TextAreaAutoSize;
