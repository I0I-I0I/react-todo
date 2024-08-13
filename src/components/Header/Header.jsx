import styles from "./Header.module.css";

import { useContext, useState } from "react";
import useInput from "../../hooks/useInput";
import Button from "../UI/Button/Button";
import Logo from "../UI/Logo/Logo";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import { TodoContext } from "../context/todoContext";
import { EditModeContext } from "../context/editMode";

const Header = () => {
	const [isAddTodo, setIsAddTodo] = useState(false);
	const [onChangeInputValue, inputState] = useInput("");
	const [editMode, setEditMode] = useContext(EditModeContext);

	const { todos, dispatchTodos } = useContext(TodoContext);

	const [count, setCount] = useState(1);

	if (todos.length === 0) {
		setEditMode(false);
	}

	const toggleAddTodo = () => {
		setIsAddTodo((prev) => !prev);
	};

	const toggleEditTodoList = () => {
		setEditMode((prev) => !prev);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatchTodos({
			type: "ADD",
			payload: {
				title: inputState.value,
				id: count,
			},
		});
		setCount(count + 1);
		inputState.setValue("");
		setIsAddTodo(false);
	};

	return (
		<div className={styles.header}>
			<Logo className={styles.header__logo} />
			<Button onClick={toggleAddTodo} variant="add" />
			{isAddTodo && (
				<Modal onClose={toggleAddTodo}>
					<form onSubmit={onSubmit}>
						<h2 style={{ textAlign: "center" }}>Create a new todo</h2>
						<Input
							name=""
							id=""
							value={inputState.value}
							onChange={onChangeInputValue}
						/>
						<Button
							type="submit"
							className={styles.button}
							disabled={!inputState.value}
						>
							Create
						</Button>
					</form>
				</Modal>
			)}
			<Button
				onClick={toggleEditTodoList}
				variant="edit"
				disabled={todos.length === 0}
			/>
		</div>
	);
};

export default Header;
