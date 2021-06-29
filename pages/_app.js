import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
