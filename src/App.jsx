import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

import { TodoProvider } from "./components/context/todoContext";
import { EditModeProvider } from "./components/context/editMode";

const App = () => (
	// TODO: drag and drop in edit mode (disable toggle complete)
	// TODO: add categories for todos
	// TODO: integration with local storage

	<EditModeProvider>
		<TodoProvider>
			<Header />
			<TodoList />
		</TodoProvider>
	</EditModeProvider>
);

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
