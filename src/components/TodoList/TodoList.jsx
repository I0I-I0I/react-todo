import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../context/todoContext";
import styles from "./TodoList.module.css";
import AddNewTodo from "../AddNewTodo/AddNewTodo";
import { EditModeContext } from "../context/editMode";

const TodoList = () => {
	const { todos, dispatchTodos } = useContext(TodoContext);
	const { editMode } = useContext(EditModeContext);
	const [currentTodo, setCurrentTodo] = useState(null);

	const dragStartHandler = (_, todo) => {
		setCurrentTodo(todo);
	};

	const dragOverHandler = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e, todo) => {
		e.preventDefault();
		const currentIndex = todos.indexOf(currentTodo);
		const dropIndex = todos.indexOf(todo);

		if (!currentTodo) return;

		const list = [...todos];
		const updatedTodos = list.filter((_, index) => index !== currentIndex);
		updatedTodos.splice(dropIndex, 0, currentTodo);

		dispatchTodos({
			type: "SET",
			payload: updatedTodos,
		});
	};

	return (
		<div className="container">
			<ul className={styles.list}>
				{todos !== 0 &&
					todos.map((todo, index) => (
						<li
							onDragStart={(e) => dragStartHandler(e, todo)}
							onDragOver={(e) => dragOverHandler(e)}
							onDrop={(e) => dropHandler(e, todo)}
							draggable={editMode}
							key={todo.id}
						>
							<Todo index={index + 1}>{todo}</Todo>
						</li>
					))}
				<li>
					<AddNewTodo />
				</li>
			</ul>
		</div>
	);
};

export default TodoList;
