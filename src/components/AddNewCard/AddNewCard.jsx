import { useContext, useState } from "react";
import styles from "./AddNewCard.module.css";
import { TodoContext } from "../context/todoContext";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { EditModeContext } from "../context/editMode";

const AddNewCard = () => {
	const { dispatchTodos } = useContext(TodoContext);
	const [editMode] = useContext(EditModeContext);
	const [isAddTodo, setIsAddTodo] = useState(false);
	const [onChangeInputValue, inputState] = useInput("");

	const toggleAddTodo = () => {
		setIsAddTodo((prev) => !prev);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatchTodos({
			type: "ADD",
			payload: {
				title: inputState.value,
				id: Date.parse(new Date()),
			},
		});
		inputState.setValue("");
		setIsAddTodo(false);
	};

	if (editMode) return;

	return (
		<>
			<div onClick={toggleAddTodo} className={styles.addNewCard}>
				<span className={styles.plus}>+</span>
				Add new card
			</div>

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
		</>
	);
};

export default AddNewCard;
