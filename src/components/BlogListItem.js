import useFetch from "../hooks/useFetch";
import { FetchError, StyledLink } from "./styles/Main.styles";
import { BlogPreview, BlogPreviewHeader } from "./styles/BlogListItem.styles";

const BlogListItem = (props) => {
	const { blog } = props;
	const { data: author, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${ blog.userId }`);

	return (
		<BlogPreview>
			<StyledLink to={ `blog/${ blog.id }` }>
				<BlogPreviewHeader>{ blog.title }</BlogPreviewHeader>
				{ error ?
					<FetchError>{ error }</FetchError> :
					<p>Author: { loading ? <i>loading... </i> : author.name }</p>
				}
			</StyledLink>
		</BlogPreview>
	);
};

export default BlogListItem;
