import axios from "axios";
import {useState, useEffect} from "react";

export const useCustomReactQuery = (urlPath) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			try {
				setError(false);
				setLoading(true);
				const response = await axios.get(urlPath, {
					signal: controller.signal,
				});
				console.log(response.data);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log("Request canceled", error.message);
					return;
				}
				setError(true);
				setLoading(false);
			}
		})();
		return () => {
			// cleanup method to unmount the component
			controller.abort();
		};
	}, [urlPath]);
	return [data, loading, error];
};
