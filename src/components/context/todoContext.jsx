import { createContext, useReducer } from "react";

export const TodoContext = createContext(null);

const todosReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload];
		case "EDIT":
			return state.map((item) =>
				item.id === action.payload.id
					? {
							...item,
							title: action.payload.title,
						}
					: item,
			);
		case "REMOVE":
			return state.filter((item) => item.id !== action.payload.id);
		case "TOGGLE":
			return state.map((item) =>
				item.id === action.payload.id
					? {
							...item,
							completed: !item.completed,
						}
					: item,
			);
		case "SET":
			return [...action.payload];
		case "SET_TODOS":
			return [...action.payload]
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
