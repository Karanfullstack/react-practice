import React, {useEffect, useState} from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import {ThemeProvider} from "./contexts/ThemeContext";
const App = () => {
	
	const [theme, setTheme] = useState("light");
	const darkMode = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	return (
		<ThemeProvider value={{theme, darkMode}}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						{/*  button component */}
						<ThemeButton />
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
