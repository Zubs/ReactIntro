import useFetch from "../hooks/useFetch";
import { BlogPreview, BlogPreviewHeader, BlogPreviewLink, FetchError } from "./styles/Styles";

const BlogListItem = (props) => {
	const { blog } = props;
	const { data: author, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${ blog.userId }`);

	return (
		<BlogPreview>
			<BlogPreviewLink to={ `blog/${ blog.id }` }>
				<BlogPreviewHeader>{ blog.title }</BlogPreviewHeader>
				{ error ?
					<FetchError>{ error }</FetchError> :
					<p>Author: { loading ? <i>loading... </i> : author.name }</p>
				}
			</BlogPreviewLink>
		</BlogPreview>
	);
};

export default BlogListItem;
