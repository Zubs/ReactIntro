import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
	const { blogs, title } = props;

	return (
		<div className="blog-list">
			<h2>{ title }</h2>
			{ blogs.map((blog) => (
				<BlogListItem blog={ blog } key={ blog.id } />
			)) }
		</div>
	);
}

export default BlogList;
