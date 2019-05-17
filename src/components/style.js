import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontSize, space } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;    
  }

  html {
    font-family: "Lato", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  ${color}
`;

StyledLink.defaultProps = {
  color: 'primaryText'
};

export const Label = styled.label`
  font-weight: bold;
  ${space}
  ${color}
  ${fontSize}
`;

Label.defaultProps = {
  px: 1,
  color: 'accent',
  fontSize: 3
};

export const Input = styled.input`
  width: 100%;
`;
