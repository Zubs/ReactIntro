import useFetch from "../hooks/useFetch";
import {useState} from "react";

const NewBlog = () => {
	const { data: authors, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('1');
	const [postLoading, setPostLoading] = useState(false);

	const submitPost = (event) => {
		event.preventDefault();

		setPostLoading(true);

		const blog = { title, body, userId: author };

		fetch('https://jsonplaceholder.typicode.com/posts/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(blog)
		})
			.then((res) => res.json())
			.then((res) => {
				setPostLoading(false);
				console.log(res)
			});
	}

	return (
		<div className="new-blog">
			<h2>Add A New Blog</h2>
			<form onSubmit={ submitPost }>
				<label>Title</label>
				<input
					type="text"
					required
					value={ title }
					onChange={ (event) => setTitle(event.target.value) }
				/>

				<label>Body</label>
				<textarea
					required
					value={ body }
					onChange={ (event) => setBody(event.target.value) }
				></textarea>

				<label>Author</label>
				<select
					disabled={ !!error || loading }
					onChange={ (event) => setAuthor(event.target.value) }
					value={ author }
					required
				>
					{
						authors.map((author) => (
							<option value={ author.id } key={ author.id }>{ author.name }</option>
						))
					}
				</select>

				<button disabled={ postLoading }>{ postLoading ? 'loading... ' : 'Add Blog' }</button>
			</form>
		</div>
	);
}

export default NewBlog;
