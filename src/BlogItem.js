import useFetch from "./useFetch";

const BlogItem = (props) => {
	const { blog } = props;
	const { data: author, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${ blog.userId }`);

	return (
		<div className="blog-preview" key={ blog.id }>
			<h2>{ blog.title }</h2>
			{ error ?
				<div className="fetch-error">{ error }</div> :
				<p>Author: { loading ? <i>loading... </i> : author.name }</p>
			}
		</div>
	);
};

export default BlogItem;
