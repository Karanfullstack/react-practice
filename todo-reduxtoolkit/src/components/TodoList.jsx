import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice";

const TodoList = ({handelEditClick, isEdit, editTodo}) => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	return (
		<div>
			{todos.map((item) => (
				<div
					key={item.id}
					className="max-w-[600px]   0 m-auto  mt-4 flex justify-between gap-2 duration-300 "
				>
					<div className="bg-transparent rounded-md w-full bg-gray-800 flex justify-between items-center">
						<span className="text-white px-3 text-xl">{item.text}</span>
					</div>
					<div className="flex justify-between gap-2">
						<button
							onClick={() => handelEditClick(item)}
							className="p-3 bg-green-400 rounded-md hover:bg-green-500 duration-200"
						>
							{editTodo.id === item.id && isEdit ? "Cancel" : "Update"}
						</button>
						<button
							onClick={() => dispatch(removeTodo(item.id))}
							className="p-3 bg-purple-400 rounded-md hover:bg-purple-500 duration-200"
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default TodoList;
