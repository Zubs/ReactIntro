import styled from "styled-components";
import { StyledLink } from "./Main.styles";

export const NavBar = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid ${ (props) => props.theme.light.secondary };
`;

export const NavBarHeader = styled.h1`
  color: ${ (props) => props.theme.light.primary };
`;

export const NavBarLink = styled(StyledLink)`
  margin-left: 16px;
  padding: 6px;
	
	&:hover {
    color: ${ (props) => props.theme.light.primary };
	}
`;

export const NavBarLinks = styled.div`
  margin-left: auto;
`;
