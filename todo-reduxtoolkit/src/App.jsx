import React, {useState} from "react";
import {TodoList, TodoForm} from "./components";

const App = () => {
	const [isEdit, setIsEdit] = useState(false);
	const [editTodo, setEditTodo] = useState({});

	function handelEditClick(todo) {
		setIsEdit((prev) => !prev);
		setEditTodo(todo);
	}
	return (
		<div className=" m-auto max-w-[900px]   h-screen duration-200">
			<div className=" mt-5 min-w-full p-4 min-h-full  ">
				<h1 className="text-3xl text-white text-center mb-5">
					Todo Redux@tookit
				</h1>
				<TodoForm isEdit={isEdit} editTodo={editTodo} setIsEdit={setIsEdit} />
				<TodoList isEdit={isEdit} handelEditClick={handelEditClick} editTodo={editTodo} />
			</div>
		</div>
	);
};

export default App;
