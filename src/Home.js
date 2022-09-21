import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([
		{ id: 1, title: 'Post 1', 'body': 'random long and boring text', author: 'Zubs' },
		{ id: 2, title: 'Post Two', 'body': 'another long post with no purpose', author: 'Young' },
		{ id: 3, title: 'Post 111', 'body': 'a final attempt to form a sentence with no actual intent', author: 'Ben Mee' }
	]);

	const deleteBlog = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	}

	return (
		<div className="home">
			<BlogList
				blogs={ blogs }
				deleteBlog={ deleteBlog }
			/>
		</div>
	);
}

export default Home;
