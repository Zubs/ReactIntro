import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, { signal: abortController.signal })
			.then(response => {
				// response.ok is true if the response status is 200-299
				if (!response.ok) 
					throw new Error('Unable to load data');

				return response.json()
			})
			.then(data => {
				setData(data);
				setLoading(false);
				setError(null);
			})
			.catch((error) => {
				if (error.name !== 'AbortError') {
					setLoading(false);
					setError(error.message);
				}
			});

		return () => abortController.abort();
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
