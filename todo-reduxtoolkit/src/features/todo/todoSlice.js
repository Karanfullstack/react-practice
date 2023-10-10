import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
	todos: [],
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
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((item) =>
				item.id === action.payload.id ? {...item, text: action.payload.text} : item
			);
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
