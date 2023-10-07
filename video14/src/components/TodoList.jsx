import React from "react";

function TodoList({todo}) {
	return (
		<div
			className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
				todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
			}`}
		>
			<input type="checkbox" className="cursor-pointer mt-3 w-6" />
			<input
				type="text"
				className={`border outline-none w-full bg-transparent rounded-lg ${
					isEdit ? "border-black/10 px-2" : "border-transparent"
				} ${todo.completed ? "line-through" : ""}`}
			/>
			{/* Edit, Save Button */}
			<button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
				{isEdit ? "📁" : "✏️"}
			</button>
			{/* Delete Todo Button */}
			<button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
				❌
			</button>
		</div>
	);
}

export default TodoList;
