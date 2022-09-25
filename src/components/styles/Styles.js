import styled from 'styled-components';
import { Link } from "react-router-dom";

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

export const NavBarLinks = styled.div`
  margin-left: auto;
`;

export const NavBarLink = styled(Link)`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
	
	&:hover {
    color: ${ (props) => props.theme.light.primary };
	}
`;

export const ContentDiv = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export const FetchError = styled.div`
  color: ${ (props) => props.theme.light.error };
  font-weight: bold;
`;

export const BlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid ${ (props) => props.theme.light.secondary };
	
	&:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const BlogPreviewLink = styled(Link)`
  text-decoration: none;
`;

export const BlogPreviewHeader = styled.h2`
  font-size: 20px;
  color: ${ (props) => props.theme.light.primary };
  margin-bottom: 8px;
`;

export const NewBlogDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const NewBlogLabel = styled.label`
  text-align: left;
  display: block;
`;

export const NewBlogHeader = styled.h2`
  font-size: 20px;
  color: ${ (props) => props.theme.light.primary };
  margin-bottom: 30px;
`;

export const NewBlogInput = styled.input`
	width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid ${ (props) => props.theme.light.secondary };
  box-sizing: border-box;
  display: block;
`;

export const NewBlogTextarea = styled.textarea`
	width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid ${ (props) => props.theme.light.secondary };
  box-sizing: border-box;
  display: block;
`;

export const NewBlogSelect = styled.select`
	width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid ${ (props) => props.theme.light.secondary };
  box-sizing: border-box;
  display: block;
`;

export const NewBlogButton = styled.button`
  background: ${ (props) => props.theme.light.primary };
  color: ${ (props) => props.theme.light.secondary };
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
	width: 100%;
	
	&:disabled {
    background: ${ (props) => props.theme.light.secondary };
    color: ${ (props) => props.theme.dark.primary };
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
	}
`;

export const BlogDetailsDiv = styled.div``;

export const BlogDetailsHeader = styled.h2`
  font-size: 20px;
  color: ${ (props) => props.theme.light.primary };
  margin-bottom: 10px;
`;

export const BlogDetailsContent = styled.div`
  margin: 20px 0;
`;

export const BlogDetailsButton = styled.button`
  background: ${ (props) => props.theme.light.primary };
  color: ${ (props) => props.theme.light.secondary };
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;
