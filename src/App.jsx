import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

import { TodoContext } from "./components/context/todoContext";
import { useContext, useEffect } from "react";

const App = () => {
	// TODO: add categories for todos

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

// const [errorTodo, isLoadingTodo, fetchTodo] = useFetching(async () => {
// 	const response = await TodoService.getTodos();
// 	setTodos(response);
// });
// useEffect(() => {
// 	fetchTodo();
// }, []);
// if (isLoadingTodo) {
// 	return <h1>Loading...</h1>;
// }
// /* {errorTodo ? <h1>{errorTodo}</h1> : <TodoList todos={todos} />} */
