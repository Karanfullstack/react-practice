import React, {useState} from "react";

const App = () => {
	const [color, setColor] = useState("olive");

	return (
		<div className={`w-full h-screen duration-300 ${color}`}>
			<div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
				<div className="bg-white px-3 py-2 rounded-2xl flex flex-wrap justify-center shadow-sm gap-2">
					<button
						onClick={() => setColor("bg-red-400")}
						className=" outline-none px-4 py-1 rounded-lg bg-red-400"
					>
						Red
					</button>
					<button
						onClick={() => setColor("bg-blue-400")}
						className=" outline-none px-4 py-1 rounded-lg bg-blue-400"
					>
						Blue
					</button>
					<button
						onClick={() => setColor("bg-green-400")}
						className=" outline-none px-4 py-1 rounded-lg bg-green-400"
					>
						Green
					</button>
					<button
						onClick={() => setColor("bg-orange-400")}
						className=" outline-none px-4 py-1 rounded-lg bg-orange-400"
					>
						Orange
					</button>
					<button
						onClick={() => setColor("bg-purple-400")}
						className=" outline-none px-4 py-1 rounded-lg bg-purple-400"
					>
						Purple
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
