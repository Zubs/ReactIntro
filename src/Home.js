import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => {
				setBlogs(data);
				setLoading(false);
			})
	}, []);

	const deleteBlog = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	}

	return (
		<div className="home">
			{
				loading &&
				<div>Loading...</div>
			}
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
