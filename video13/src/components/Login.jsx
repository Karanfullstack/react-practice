import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const {setUser} = useContext(UserContext);

	const handelSubmit = (e) => {
		e.preventDefault();
		setUser({username, password});
	};
	return (
		<div>
			<h1>Login</h1>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handelSubmit}>Submit</button>
		</div>
	);
};

export default Login;
