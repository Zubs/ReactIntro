import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	NewBlogButton,
	NewBlogDiv,
	NewBlogHeader,
	NewBlogInput,
	NewBlogLabel,
	NewBlogSelect,
	NewBlogTextarea
} from "./styles/NewBlog.styles";

const NewBlog = () => {
	const { data: authors, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('1');
	const [postLoading, setPostLoading] = useState(false);

	const navigateFunction = useNavigate();

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
			.then(() => {
				setPostLoading(false);
				navigateFunction('/');
			});
	}

	return (
		<NewBlogDiv>
			<NewBlogHeader>Add A New Blog</NewBlogHeader>
			<form onSubmit={ submitPost }>
				<NewBlogLabel>Title</NewBlogLabel>
				<NewBlogInput
					type="text"
					required
					value={ title }
					onChange={ (event) => setTitle(event.target.value) }
				/>

				<NewBlogLabel>Body</NewBlogLabel>
				<NewBlogTextarea
					required
					value={ body }
					onChange={ (event) => setBody(event.target.value) }
				></NewBlogTextarea>

				<NewBlogLabel>Author</NewBlogLabel>
				<NewBlogSelect
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
				</NewBlogSelect>

				<NewBlogButton disabled={ postLoading }>{ postLoading ? 'loading... ' : 'Add Blog' }</NewBlogButton>
			</form>
		</NewBlogDiv>
	);
}

export default NewBlog;
