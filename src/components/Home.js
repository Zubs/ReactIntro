import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
	const { data: blogs, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<div className="home">
			{ loading && <div><i>Loading... </i></div> }
			{ error ?
				<div className="fetch-error">{ error }</div> :
				<BlogList blogs={ blogs } title="All Blogs" />
			}
		</div>
	);
}

export default Home;
