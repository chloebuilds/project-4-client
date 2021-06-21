import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
    /* margin: 0;
    padding: 0; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', Helvetica, Sans-Serif;
    transition: all 0.50s linear;
}
h1 {
  font-family: "Space Grotesk";

}

a {
  text-decoration: none;
}

`
