import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import { FetchError } from "./styles/Main.styles";

const Home = () => {
	const { data: blogs, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<div>
			{ loading && <div><i>Loading... </i></div> }
			{ error ?
				<FetchError>{ error }</FetchError> :
				<BlogList blogs={ blogs } title="All Blogs" />
			}
		</div>
	);
}

export default Home;
