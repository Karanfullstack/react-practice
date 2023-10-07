import React, {useState} from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import {ThemeProvider} from "./contexts/ThemeContext";

const App = () => {
	const [theme, setTheme] = useState("light");

	const darkTheme = () => {
		setTheme("dark");
	};

	const lightTheme = () => {
		setTheme("light");
	};

	
	return (
		<ThemeProvider value={{theme, darkTheme, lightTheme}}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<Button />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;
