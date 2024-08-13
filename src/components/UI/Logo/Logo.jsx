import cls from "../../../utils/cls";
import styles from "./Logo.module.css";

const Logo = ({ className }) => (
	<div className={cls(styles.logo, className)}>Logo</div>
);

export default Logo;
