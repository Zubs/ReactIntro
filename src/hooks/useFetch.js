import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then(response => {
				if (response.status !== 200 && response.status !== 304) throw new Error('Unable to load data');
				return response.json()
			})
			.then(data => {
				setData(data);
				setLoading(false);
				setError(null);
			})
			.catch((error) => {
				setLoading(false);
				setError(error.message);
			});
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
