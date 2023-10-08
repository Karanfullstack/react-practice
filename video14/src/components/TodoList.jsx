import {useState} from "react";
import {AiFillDelete, AiFillEdit, AiFillSave} from "react-icons/ai";
import {useTodo} from "../contexts";
const TodoList = ({todo}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [newTodo, setNewTodo] = useState(todo.todo);
	const {deleteTodo, toogleTodo, setTodos} = useTodo();

	const updateTodo = () => {
		setTodos((prev) =>
			prev.map((item) =>
				item.id === todo.id ? {...item, todo: newTodo} : item
			)
		);
	};

	const toogleComplete = () => {
		toogleTodo(todo.id);
	};

	return (
		<div className="flex w-full border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-lg   text-white">
			<input
				type="checkbox"
				className=" cursor-pointer mt-5 scale-150"
				checked={todo.completed}
				onChange={toogleComplete}
			/>
			<input
				type="text"
				className={`text-2xl ${
					isEdit ? " border border-gray-500" : ""
				} outline-none w-full bg-transparent rounded-lg py-2 px-2 duration-200 ${
					todo.completed && "border-0 line-through bg-red-400 bg-transparent"
				}`}
				readOnly={!isEdit}
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button
				onClick={() => {
					if (todo.completed) return;
					isEdit
						? updateTodo() ?? setIsEdit(false)
						: setIsEdit((prev) => !prev);
				}}
				className="text-3xl text-green-500"
			>
				{isEdit ? <AiFillSave /> : <AiFillEdit />}
			</button>
			<button
				onClick={() => deleteTodo(todo.id)}
				className="text-3xl text-red-400"
			>
				<AiFillDelete />
			</button>
		</div>
	);
};

export default TodoList;
