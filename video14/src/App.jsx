import React, {useEffect, useState} from "react";
import {TodoProvider} from "./contexts";
import {TodoForm, TodoList} from "./components";

const App = () => {
	const [todos, setTodos] = useState([]);

	// @AddTodo
	const addTodo = (todo) => {
		setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);
	};

	// @UpdateTodo
	const updateTodo = (todo, id) => {
		setTodos((prev) =>
			prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
		);
	};

	// @DeleteTodo
	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
	};

	// @ToggleComplete
	const toggleComplete = (id) => {
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? {...prevTodo, completed: !prevTodo.completed}
					: prevTodo
			)
		);
	};

	// Get todos from localstorage
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	// Set todos to localstroage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.map((item) => (
							<div className="w-full" key={item.id}>
								<TodoList todo={item}/>
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
};

export default App;
