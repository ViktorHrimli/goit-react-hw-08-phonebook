import styled, { createGlobalStyle } from 'styled-components';
import { theme } from 'Thema';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';

export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.white};
  }
  h1,
  h2,
  h3 {
    padding: 0%;
    margin: 0;
    font-family: ${theme.fonts.heading};
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.black};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
