import styles from "./Header.module.css";

import { useContext } from "react";
import Button from "../UI/Button/Button";
import Logo from "../UI/Logo/Logo";
import { TodoContext } from "../context/todoContext";
import { EditModeContext } from "../context/editMode";

const Header = () => {
	const [editMode, setEditMode] = useContext(EditModeContext);
	const { todos } = useContext(TodoContext);

	if (todos.length === 0) {
		setEditMode(false);
	}

	const toggleEditTodoList = () => {
		setEditMode((prev) => !prev);
	};

	return (
		<div className={styles.header}>
			<Logo className={styles.header__logo} />
			<Button
				onClick={toggleEditTodoList}
				variant="edit"
				disabled={todos.length === 0}
			/>
		</div>
	);
};

export default Header;
