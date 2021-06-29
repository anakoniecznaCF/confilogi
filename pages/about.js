import Head from 'next/head';
import AboutHero from '../components/about-page/AboutHero/AboutHero';
import About from '../components/about-page/About/About';
import Footer from '../components/common/Footer/Footer';
import CareerCTA from '../components/about-page/CareerCTA/CareerCTA';
import Values from '../components/about-page/Values/Values';
import Team from '../components/about-page/Team/Team';
import Opinions from '../components/about-page/Opinions/Opinions';
//data
import offers from '../data/offers';

export async function getStaticProps() {
  return {
    props: {
      offers: offers.length,
    },
  };
}

const AboutPage = ({ offers }) => {
  return (
    <>
      <Head>
        <title>Confilogi | Poznajmy się</title>
      </Head>
      <AboutHero />
      <About offers={offers} />
      <CareerCTA />
      <Values />
      <Team />
      <Opinions />
      <Footer />
    </>
  );
};

export default AboutPage;
