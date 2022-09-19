import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([]);
	const [title, setTitle] = useState(`All ${ blogs.length } Blogs`);

	const deleteBlog = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
		setTitle(`All ${ blogs.length } Blogs`);
	}

	useEffect(() => {
		const fetchBlogs = async () => {
			let blogs = await fetch('https://jsonplaceholder.typicode.com/posts');
			blogs = await blogs.json();

			blogs.forEach(async (blog) => {
				const user = await fetch('https://jsonplaceholder.typicode.com/users/' + blog.userId);
				blog.user = await user.json();
			});

			setBlogs(blogs);
			setTitle(`All ${ blogs.length } Blogs`);
		}

		fetchBlogs();
	}, [])

	return (
		<div className="home">
			<BlogList
				blogs={ blogs }
				title={ title }
				deleteBlog={ deleteBlog }
			/>
		</div>
	);
}

export default Home;
