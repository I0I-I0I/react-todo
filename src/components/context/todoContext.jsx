import { createContext, useReducer } from "react";

export const TodoContext = createContext(null);

const setStore = (state) => {
	localStorage.setItem("todos", JSON.stringify(state));
	return state;
};

const todosReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return setStore([...state, action.payload]);
		case "EDIT":
			return setStore(
				state.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								title: action.payload.title,
							}
						: item,
				),
			);
		case "REMOVE":
			return setStore(state.filter((item) => item.id !== action.payload.id));
		case "TOGGLE":
			return setStore(
				state.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								completed: !item.completed,
							}
						: item,
				),
			);
		case "SET":
			return setStore([...action.payload]);
		case "GET_STORE":
			if (localStorage.getItem("todos")) {
				return [...JSON.parse(localStorage.getItem("todos"))];
			}
			return state;
		default:
			throw new Error();
	}
};

export const TodoProvider = ({ children }) => {
	const [todos, dispatchTodos] = useReducer(todosReducer, []);

	return (
		<TodoContext.Provider value={{ todos: todos, dispatchTodos }}>
			{children}
		</TodoContext.Provider>
	);
};
