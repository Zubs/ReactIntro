import styled from "styled-components";
import { Button, Header, WideDiv } from "./Main.styles";

export const NewBlogButton = styled(Button)`
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

export const NewBlogDiv = styled(WideDiv)`
  margin: 0 auto;
  text-align: center;
`;

export const NewBlogHeader = styled(Header)`
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

export const NewBlogLabel = styled.label`
  text-align: left;
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

export const NewBlogTextarea = styled.textarea`
	width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid ${ (props) => props.theme.light.secondary };
  box-sizing: border-box;
  display: block;
`;
