const BlogList = (props) => { // props can be named anything
	const { blogs } = props;
	const { deleteBlog } = props;

	return (
		<div className="blog-list">
			{ blogs.map((blog) => (
				<div className="blog-preview" key={ blog.id }>
					<h2>{ blog.title }</h2>
					<p>Author: { blog.author }</p>
					<button onClick={ () => deleteBlog(blog.id) }>Delete</button>
				</div>
			)) }
		</div>
	);
}

export default BlogList;
