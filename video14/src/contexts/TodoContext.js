import {createContext, useContext} from "react";

export const TodoContext = createContext({
	todos: [{id: 1, todo: "this is my first todo", completed: false}],
	addTodo: () => {},
	updateTodo: () => {},
	deleteTodo: () => {},
	toogleTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
	return useContext(TodoContext);
}
