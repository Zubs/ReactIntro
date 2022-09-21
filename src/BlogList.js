import BlogItem from "./BlogItem";

const BlogList = (props) => {
	const { blogs, title, deleteBlog } = props;

	return (
		<div className="blog-list">
			<h2>{ title }</h2>
			{ blogs.map((blog) => (
				<BlogItem blog={ blog } deleteBlog={ deleteBlog } />
			)) }
		</div>
	);
}

export default BlogList;
