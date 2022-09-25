import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Header = styled.h2`
  font-size: 20px;
  color: ${ (props) => props.theme.light.primary };
`;

export const WideDiv = styled.div`
  max-width: 600px;
`;

export const Button = styled.button`
  background: ${ (props) => props.theme.light.primary };
  color: ${ (props) => props.theme.light.secondary };
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ContentDiv = styled(WideDiv)`
  margin: 40px auto;
  padding: 20px;
`;

export const FetchError = styled.div`
  color: ${ (props) => props.theme.light.error };
  font-weight: bold;
`;

export const Footer = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;
