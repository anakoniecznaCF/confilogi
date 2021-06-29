import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  min-height: -webkit-fill-available;
  /* scroll-behavior: smooth; */
  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 0.5rem;
    border: transparent;
  }
}

  body {
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    color: #1D1D1B;
  }

  h1 {
    font-size: 3rem;

    @media (min-width: 768px) {
      font-size: 6.7rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
