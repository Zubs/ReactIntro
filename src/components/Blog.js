import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Blog = () => {
	const { id } = useParams();
	const {
		data: blog,
		loading: postLoading,
		error: postError
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${ id }`);
	const {
		data: author,
		loading: authorLoading,
		error: authorError
	} = useFetch(`https://jsonplaceholder.typicode.com/users/${ blog.userId }`);
	const navigateFunction = useNavigate();

	const deleteBlog = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`, {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then(() => navigateFunction('/'));
	}

	return (
		<div className="blog-details">
			{ postLoading ? <i>loading... </i> : null }
			{ postError ?
				<div className="fetch-error">{ postError }</div> :
				<article>
					<h2>{ blog.title }</h2>
					{ authorError ?
						<div className="fetch-error">{ authorError }</div> :
						<p>Author: { authorLoading ? <i>loading... </i> : author.name }</p>
					}
					<div>{ blog.body }</div>
					<button onClick={ deleteBlog }>Delete</button>
				</article>
			}
		</div>
	)
}

export default Blog;
