import {useCustomReactQuery} from "./customReactQuery";
import "./App.css";
import {useState} from "react";
function App() {
	const [search, setSearch] = useState("");
	const [data, loading, error] = useCustomReactQuery(
		"/api/products?search=" + search
	);

	return (
		<div>
			<h1>Api Handling in React</h1>
			{loading && <h1>Loading..</h1>}
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<h2>Number of Products:{data.length}</h2>
			{data.map((item) => (
				<h2 key={item.id}>{item.title}</h2>
			))}
		</div>
	);
}

export default App;
