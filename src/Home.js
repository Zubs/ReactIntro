import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				if (response.status !== 200 && response.status !== 304) throw new Error('Unable to load posts');
				return response.json()
			})
			.then(data => {
				setBlogs(data);
				setLoading(false);
				setError(null);
			})
			.catch((error) => {
				setLoading(false);
				setError(error.message);
			});
	}, []);

	const deleteBlog = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	}

	return (
		<div className="home">
			{ loading && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{
				blogs &&
				<BlogList
					blogs={ blogs }
					deleteBlog={ deleteBlog }
					title="All Blogs"
				/>
			}
		</div>
	);
}

export default Home;
