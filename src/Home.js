import { useState } from "react";

const titles = [
	"Welcome here",
	"Hello there!",
	"Howdy, partner",
	"What's popping bruv"
];

const Home = () => {

	const [
		title, // This is the reactive variable
		setTitle // This method is used to set/update it
	] = useState(titles[0]); // useState takes an initial state. In typescript, the type of the variable can be inferred from this initial state

	const [clicks, setClicks] = useState(0);

	function clickResponse() {
		setClicks(clicks + 1);
		setTitle(titles[Math.floor(Math.random() * titles.length)]);
	}

	return (
		<div className="home">
			<h1>{ title }</h1> {/*Using the reactive variable here*/}
			<button onClick={clickResponse}>Change Title</button> <small>Clicked { clicks } time(s)</small>
		</div>
	);
}

export default Home;
