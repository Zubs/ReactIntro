import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button, FetchError } from "./styles/Main.styles";
import {
	BlogDetailsContent,
	BlogDetailsDiv,
	BlogDetailsHeader
} from "./styles/Blog.styles";

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
		<BlogDetailsDiv>
			{ postLoading ? <i>loading... </i> : null }
			{ postError ?
				<FetchError>{ postError }</FetchError> :
				<article>
					<BlogDetailsHeader>{ blog.title }</BlogDetailsHeader>
					{ authorError ?
						<FetchError>{ authorError }</FetchError> :
						<p>Author: { authorLoading ? <i>loading... </i> : author.name }</p>
					}
					<BlogDetailsContent>{ blog.body }</BlogDetailsContent>
					<Button onClick={ deleteBlog }>Delete</Button>
				</article>
			}
		</BlogDetailsDiv>
	)
}

export default Blog;
