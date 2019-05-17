import React from 'react';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontSize, space, border } from 'styled-system';
import { Text } from 'rebass';

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
  width: 100%;
  text-decoration: none;
  ${space}
  ${color}
  ${border}
  ${fontSize}
`;

StyledLink.defaultProps = {
  color: 'primaryText',
  border: 'none',
  px: 0,
  py: 0
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

export const Pre = props => (
  <Text
    {...props}
    as="pre"
    fontFamily="Menlo, monospace"
    p={2}
    mt={2}
    color="secondaryText"
  />
);
