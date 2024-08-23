import { useContext, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import cls from "../../utils/cls";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { EditModeContext } from "../context/editMode";
import { TodoContext } from "../context/todoContext";
import styles from "./Todo.module.css";

const Todo = ({ children, index }) => {
	const { dispatchTodos } = useContext(TodoContext);
	const [editMode] = useContext(EditModeContext);
	const [onChangeInput, inputState] = useInput(children.title);
	const [localEditMode, setLocalEditMode] = useState(false);
	const inputOnEdit = useRef();

	useEffect(() => {
		if (!editMode) {
			setLocalEditMode(false);
			inputState.setValue(children.title);
		}
	}, [editMode]);

	useEffect(() => {
		inputOnEdit.current.focus();
	}, [localEditMode]);

	const handleEditTodo = (e) => {
		e.preventDefault();
		dispatchTodos({
			type: "EDIT",
			payload: {
				id: children.id,
				title: inputState.value,
			},
		});
		setLocalEditMode(false);
	};

	const toggleCompletedTodo = (item) => {
		if (editMode) return;
		dispatchTodos({
			type: "TOGGLE",
			payload: item,
		});
	};

	const onRemoveTodo = (item) => {
		dispatchTodos({
			type: "REMOVE",
			payload: item,
		});
	};

	const onEdit = (e) => {
		e.preventDefault();
		setLocalEditMode(true);
	};

	return (
		<div
			className={cls(
				styles.todo,
				children.completed ? styles.todoComplete : "",
				editMode && !localEditMode && styles.todoEditMode,
			)}
		>
			<form onSubmit={handleEditTodo}>
				<span className={styles.id}>{index}</span>
				<label
					htmlFor={"todoComplete" + children.id}
					className={styles.label}
					style={{ cursor: editMode && "grab" }}
				>
					<Input
						ref={inputOnEdit}
						value={inputState.value}
						type="text"
						onChange={onChangeInput}
						disabled={!localEditMode}
						className={cls(
							styles.inputOnChange,
							!localEditMode && styles.inputOnChangeDisabled,
						)}
					/>
					<input
						id={"todoComplete" + children.id}
						type="checkbox"
						checked={children.completed}
						onChange={() => toggleCompletedTodo(children)}
						className="hidden"
					/>
				</label>
				<div className={cls(styles.buttonBlock, !editMode && "hidden")}>
					{localEditMode ? (
						<Button className={styles.button} variant="save" type="submit" />
					) : (
						<Button
							onClick={(e) => onEdit(e)}
							className={styles.button}
							variant="edit"
						/>
					)}
					<Button
						onClick={(e) => (e.preventDefault(), onRemoveTodo(children))}
						className={styles.button}
						variant="remove"
					/>
				</div>
			</form>
		</div>
	);
};

export default Todo;
