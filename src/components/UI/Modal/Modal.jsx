import styles from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = ({ children, onClose }) => (
	<div className={styles.modal}>
		<Button
			onClick={onClose}
			className={styles.modal__buttonClose}
			variant="close"
		/>
		{children}
	</div>
);

export default Modal;
