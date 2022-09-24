import useFetch from "../hooks/useFetch";
import {Link} from "react-router-dom";

const BlogListItem = (props) => {
	const { blog } = props;
	const { data: author, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${ blog.userId }`);

	return (
		<div className="blog-preview">
			<Link to={ `/${ blog.id }` }>
				<h2>{ blog.title }</h2>
				{ error ?
					<div className="fetch-error">{ error }</div> :
					<p>Author: { loading ? <i>loading... </i> : author.name }</p>
				}
			</Link>
		</div>
	);
};

export default BlogListItem;
