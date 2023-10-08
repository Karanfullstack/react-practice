import {useEffect, useState} from "react";
import {TodoForm, TodoList} from "./components";
import {TodoProvider} from "./contexts/index";
const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prev) => [...prev, {id: Date.now(), ...todo, completed: false}]);
	};
	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
	};

	const toogleTodo = (id) => {
		setTodos((prev) =>
			prev.map((item) =>
				item.id === id ? {...item, completed: !item.completed} : item
			)
		);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	return (
		<TodoProvider value={{todos, setTodos, addTodo, toogleTodo, deleteTodo}}>
			<div className=" bg-gray-800 max-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto text-white ">
					<h1 className="text-center mb-6 text-2xl">Manage Your Todos</h1>
					{/* Todo Form */}
					<TodoForm />
					<div className="flex flex-wrap gap-y-3 mt-4">
						{/* Todo list */}
						{todos.map((item) => (
							<div key={item.id} className="w-full duration-300">
								<TodoList todo={item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
};

export default App;
