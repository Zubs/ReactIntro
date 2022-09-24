import { useParams } from "react-router-dom";

const Blog = () => {
	const { id } = useParams();

	return (
		<div className="blog-details">
			<h2>Blog { id } Details</h2>
		</div>
	)
}

export default Blog;
