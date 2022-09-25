import styled from "styled-components";
import { Header } from "./Main.styles";

export const BlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid ${ (props) => props.theme.light.secondary };
	
	&:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const BlogPreviewHeader = styled(Header)`
  margin-bottom: 8px;
`;
