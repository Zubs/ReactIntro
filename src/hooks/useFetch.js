import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, { signal: abortController.signal })
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
