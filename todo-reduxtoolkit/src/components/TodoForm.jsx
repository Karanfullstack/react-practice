import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo, updateTodo} from "../features/todo/todoSlice";
const TodoForm = ({isEdit, editTodo, setIsEdit}) => {
	const [todo, setTodo] = useState("");
	const [editValue, setEditValue] = useState("");
	const dispatch = useDispatch();

	const todoHandel = (e) => {
		e.preventDefault();
		dispatch(addTodo(todo));
		setTodo("");
	};

	useEffect(() => {
		setEditValue(editTodo.text);
	}, [editTodo]);

	const handelEdit = (e) => {
		e.preventDefault();
		dispatch(updateTodo({id: editTodo.id, text: editValue}));
		setEditValue("");
		setIsEdit(false)

	};

	return (
		<div>
			{isEdit ? (
				<form
					onSubmit={handelEdit}
					className="w-full  mb-5 flex items-center justify-center duration-200"
				>
					<input
						type="text"
						placeholder="Enter Todo..."
						className=" w-[500px]  p-4 bg-slate-100 duration-200 rounded-l-lg text-xl outline-none"
						autoFocus
						value={editValue || ""}
						onChange={(e) => setEditValue(e.target.value)}
					/>
					<button
						type="submit"
						className="text-white  p-4 bg-red-400 duration-150 rounded-r-lg text-xl hover:bg-red-500"
					>
						UPDATE
					</button>
				</form>
			) : (
				<form
					onSubmit={todoHandel}
					className="w-full  mb-5 flex items-center justify-center duration-200"
				>
					<input
						type="text"
						placeholder="Enter Todo..."
						className=" w-[500px]  p-4 bg-slate-100 duration-200 rounded-l-lg text-xl outline-none"
						autoFocus
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button
						type="submit"
						className="text-white  p-4 bg-red-400 duration-150 rounded-r-lg text-xl hover:bg-red-500"
					>
						ADD
					</button>
				</form>
			)}
		</div>
	);
};

export default TodoForm;
