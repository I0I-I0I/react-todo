import { useContext, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../context/todoContext";
import styles from "./TodoList.module.css";

const TodoList = () => {
	const { todos } = useContext(TodoContext);
	const [todoList, setTodoList] = useState(todos)
	const [currentTodo, setCurrentTodo] = useState(null)

	// FIX: on complete todo, the order has changed
	useEffect(() => {
		setTodoList(todos)
	}, [todos])

	const dragStartHandler = (e, todo) => {
		setCurrentTodo(todo)
	}

	const dragEndHandler = (e) => {
		console.log(e)
	}

	const dragOverHandler = (e) => {
		e.preventDefault()
	}

	const dropHandler = (e, todo) => {
		e.preventDefault()
		const currentIndex = todoList.indexOf(currentTodo)
		const dropIndex = todoList.indexOf(todo)

		if (!currentTodo) return

		const list = todoList.slice()
		const updatedTodos = list.filter((_, index) => index !== currentIndex)
		updatedTodos.splice(dropIndex, 0, currentTodo)

		setTodoList(updatedTodos)
	}

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
				{todoList.map((todo, index) => (
					<li
						onDragStart={(e) => dragStartHandler(e, todo)}
						onDragLeave={(e) => dragEndHandler(e)}
						onDragEnd={(e) => dragEndHandler(e)}
						onDragOver={(e) => dragOverHandler(e)}
						onDrop={(e) => dropHandler(e, todo)}
						draggable={true}
						key={todo.id}>
						<Todo index={index + 1}>
							{todo}
						</Todo>
					</li>
				))}
			</ul>
		</div>
	);
};


export default TodoList;
