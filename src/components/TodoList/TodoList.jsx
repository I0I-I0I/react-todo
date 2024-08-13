import { useContext } from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../context/todoContext";
import styles from "./TodoList.module.css";

const TodoList = () => {
	const { todos } = useContext(TodoContext);

	if (todos.length === 0) {
		return (
			<h1
				style={{
					textAlign: "center",
					position: "absolute",
					top: "50%",
					left: "50%",
					translate: "-50% -50%",
				}}
			>
				You don&apos;t have a todos
			</h1>
		);
	}

	return (
		<div className="container">
			<ul className={styles.list}>
				{todos.map((todo, index) => (
					<Todo key={todo.id} index={index + 1}>
						{todo}
					</Todo>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
