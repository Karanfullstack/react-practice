import React, {useCallback, useEffect, useRef, useState} from "react";

const App = () => {
	const [length, setLengh] = useState(8);
	const [isNumber, setIsNumber] = useState(true);
	const [isChar, setIsChar] = useState(false);
	const [password, setPassword] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	// password Reference
	const passwordRef = useRef(null);

	// copy text from input
	const clipBoard = () => {
		setIsCopied(true);
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 30);
		window.navigator.clipboard.writeText(password);
		setTimeout(() => {
			setIsCopied(false);
		}, 500);
	};

	// Genrate Random Character
	const getRandomChar = () => {
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (isNumber) str += "0123456789";
		if (isChar) str += "!@#$%^&*-_+=[]{}~`";
		return str.charAt(Math.floor(Math.random() * str.length + 1));
	};

	// Generate Random Password
	const passwordGenerator = useCallback(() => {
		let pass = "";
		for (let i = 1; i <= length; i++) {
			pass += getRandomChar();
			setPassword(pass);
		}
	}, [length, isNumber, isChar, setPassword]);

	// useEffect to call passwordGenerator
	useEffect(() => {
		passwordGenerator();
	}, [passwordGenerator, length, isChar, isNumber]);

	console.log(password);
	return (
		<div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 px-2 my-8 text-orange-700 bg-gray-800">
			<h1 className=" text-white text-center text-2xl mb-4">
				Password Generator
			</h1>
			<div className="flex shadow rounded-lg overflow-hidden p-2 mb-4 w-full ">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3 rounded-lg"
					placeholder="Password"
					readOnly
					ref={passwordRef}
				/>

				<button
					className="outline-none bg-blue-700 ml-2 rounded-lg text-white px-3 py-0.5 shrink-0"
					onClick={clipBoard}
				>
					{isCopied ? "Copied" : "Copy"}
				</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={6}
						max={30}
						value={length}
						className="cursor-pointer"
						onChange={(e) => setLengh(e.target.value)}
					/>
					<label>Lengh: {length}</label>
				</div>
				<div className="flex items-center gap-x-2">
					<input
						type="checkbox"
						defaultChecked={isNumber}
						id="numberInput"
						onChange={() => setIsNumber((prev) => !prev)}
					/>
					<label htmlFor="numberInput">Numbers</label>

					<input
						type="checkbox"
						id="charInput"
						defaultChecked={isChar}
						onChange={() => setIsChar((prev) => !prev)}
					/>
					<label htmlFor="numberInput">Character</label>
				</div>
			</div>
		</div>
	);
};

export default App;
