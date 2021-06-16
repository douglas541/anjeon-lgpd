import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'DM Sans', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;