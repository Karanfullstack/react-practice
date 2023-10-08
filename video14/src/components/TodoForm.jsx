import {useState} from "react";
import {useTodo} from "../contexts";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const {addTodo} = useTodo();

	const handelTodo = (e) => {
		e.preventDefault();
		if (todo.trim() === "") {
			return;
		}
		addTodo({todo});
		setTodo("");
	};
	return (
		<form onSubmit={handelTodo} className="flex">
			<input
				type="text"
				placeholder="Write Todo.."
				className="w-full border border-black/10 rounded-l-lg outline-none duration-150 bg-white text-black px-2 py-2 text-lg"
				onChange={(e) => setTodo(e.target.value)}
				value={todo}
			/>
			<button
				type="submit"
				className="bg-green-600 text-white px-4 text-xl py-1 shrink-0 rounded-r-lg"
			>
				Add
			</button>
		</form>
	);
};

export default TodoForm;
