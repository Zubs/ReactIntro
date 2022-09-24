import {useEffect, useState} from "react";

const BlogItem = (props) => {
	const { blog, deleteBlog } = props;

	const [author, setAuthor] = useState('Anonymous');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/' + blog.userId)
			.then(response => response.json())
			.then(json => setAuthor(json));
	}, [blog.userId]);

	return (
		<div className="blog-preview" key={ blog.id }>
			<h2>{ blog.title }</h2>
			<p>Author: { author.name }</p>
			<button onClick={ () => deleteBlog(blog.id) }>Delete</button>
		</div>
	);
};

export default BlogItem;
