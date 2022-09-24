import useFetch from "../hooks/useFetch";
import {useState} from "react";

const NewBlog = () => {
	const { data: authors, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('1');

	return (
		<div className="new-blog">
			<h2>Add A New Blog</h2>
			<form>
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
					disabled={ !!error || !!loading }
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

				<button>Add Blog</button>
			</form>
		</div>
	);
}

export default NewBlog;
