import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
	todos: JSON.parse(localStorage.getItem("todos") || []),
};

const TodoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((item) =>
				item.id === action.payload.id
					? {...item, text: action.payload.text}
					: item
			);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
	},
});
export const {addTodo, removeTodo, updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;

// const updateTodo = () => {
// 	setTodos((prev) =>
// 		prev.map((item) => (item.id === todo.id ? {...item, todo: newTodo} : item))
// 	);
// };
