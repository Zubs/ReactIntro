import {
	NavBar,
	NavBarHeader,
	NavBarLink,
	NavBarLinks
} from "./styles/Navbar.styles";

const Navbar = () => {
	return (
		<NavBar>
			<NavBarHeader>The Zubs Blog</NavBarHeader>
			<NavBarLinks>
				<NavBarLink to="/">Home</NavBarLink>
				<NavBarLink to="/create">New Blog</NavBarLink>
			</NavBarLinks>
		</NavBar>
	);
}

export default Navbar;
