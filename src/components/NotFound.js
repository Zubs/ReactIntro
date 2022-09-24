import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h2>Sorry. Actually I'm not sorry</h2>
			<p>Whatcha looking for? Huh?</p>
			<Link to="/">Go home, will you?</Link>
		</div>
	);
}

export default NotFound;
