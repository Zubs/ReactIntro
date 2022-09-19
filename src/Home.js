import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

	const [blogs, setBlogs] = useState([
		{
			title: 'Post 1',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur cumque dignissimos officia quia quisquam sint! Ad distinctio eum harum.',
			author: 'Zubs',
			id: 1
		},
		{
			title: 'Post 2',
			body: 'laboriosam minus quas repellat, voluptatem. Eos magnam pariatur sint suscipit.',
			author: 'Young',
			id: 2
		},
		{
			title: 'Post 3',
			body: 'laboriosam minus quas repellat, voluptatem. Eos magnam pariatur sint suscipit.',
			author: 'Zubs',
			id: 3
		}
	]);

	return (
		<div className="home">
			<BlogList blogs={ blogs } title="All Blogs" />
		</div>
	);
}

export default Home;
