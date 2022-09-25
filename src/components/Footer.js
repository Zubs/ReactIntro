import { Footer as FooterDiv } from "./styles/Main.styles";

const link = "https://zubs.github.io";

const Footer = () => {
	return (
		<FooterDiv>
			<p>Built by <a
				href={ link }
				target="_blank"
				rel="noreferrer"
			>me</a></p>
		</FooterDiv>
	);
}

export default Footer;
