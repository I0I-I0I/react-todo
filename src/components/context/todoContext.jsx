import { createContext, useReducer } from "react";

export const TodoContext = createContext(null);

const todosReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					completed: false,
				},
			];
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
			return state.filter((item) => item.id !== action.payload);
		case "TOGGLE":
			return state.map((item) =>
				item.id === action.payload
					? {
							...item,
							completed: !item.completed,
						}
					: item,
			);
		case "SET":
			return [...action.payload];
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
