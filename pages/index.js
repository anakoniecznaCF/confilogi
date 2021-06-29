import Head from 'next/head';
import Hero from '../components/home-page/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Confilogi</title>
      </Head>
      <Hero />
    </>
  );
};

export default HomePage;
