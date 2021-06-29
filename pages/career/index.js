import Head from 'next/head';
import ApplicationForm from '../../components/career-page/ApplicationForm/ApplicationForm';
import CareerHero from '../../components/career-page/CareerHero/CareerHero';
import Offers from '../../components/career-page/Offers/Offers';
import Footer from '../../components/common/Footer/Footer';
//data
import offers from '../../data/offers';

export async function getStaticProps() {
  return {
    props: {
      offers,
    },
  };
}

const CareerPage = ({ offers }) => {
  return (
    <>
      <Head>
        <title>Confilogi | Kariera</title>
      </Head>
      <CareerHero />
      <Offers offers={offers} />
      <ApplicationForm />
      <Footer />
    </>
  );
};

export default CareerPage;
