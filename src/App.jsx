import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

import { TodoContext } from "./components/context/todoContext";
import { useContext, useEffect } from "react";

// TODO: add categories for todos
// FIX: layout

const App = () => {
	const { dispatchTodos } = useContext(TodoContext);

	useEffect(() => {
		dispatchTodos({ type: "GET_STORE" });
	}, [dispatchTodos]);

	return (
		<>
			<Header />
			<TodoList />
		</>
	);
};

export default App;
