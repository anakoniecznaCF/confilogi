import Head from 'next/head';
import ErrorHero from '../components/404-page/ErrorHero/ErrorHero';

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <ErrorHero />
    </>
  );
};

export default ErrorPage;
