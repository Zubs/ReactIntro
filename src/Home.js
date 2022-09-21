import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setBlogs(json))
	}, []);

	const deleteBlog = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	}

	return (
		<div className="home">
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
