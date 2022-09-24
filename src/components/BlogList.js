import BlogItem from "./BlogItem";

const BlogList = (props) => {
	const { blogs, title } = props;

	return (
		<div className="blog-list">
			<h2>{ title }</h2>
			{ blogs.map((blog) => (
				<BlogItem blog={ blog } />
			)) }
		</div>
	);
}

export default BlogList;
