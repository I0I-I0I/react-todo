import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoService from "./api/TodoService";
import useFetching from "./hooks/useFetching";
import { TodoContext } from "./components/context/todoContext";
import { useContext, useEffect } from "react";

// TODO: update performance

const App = () => {
	const { todos, dispatchTodos } = useContext(TodoContext);

	const [errorTodo, isLoadingTodo, fetchTodo] = useFetching(async () => {
		const response = await TodoService.getTodos();
		dispatchTodos({ type: "SET_TODOS", payload: response });
	});

	useEffect(() => {
		fetchTodo();
	}, []);

	if (!todos || isLoadingTodo) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<Header />
			{errorTodo ? <h1>{errorTodo}</h1> : <TodoList todos={todos} />}
		</>
	);
};

export default App;
