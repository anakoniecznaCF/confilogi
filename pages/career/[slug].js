import Head from 'next/head';
import CareerHero from '../../components/career-page/CareerHero/CareerHero';
import Footer from '../../components/common/Footer/Footer';
import PageWrapper from '../../components/career-offer-page/PageWrapper';

import offers from '../../data/offers';

export async function getStaticPaths() {
  const paths = offers.map((offer) => ({ params: { slug: offer.slug } }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;

  const selectedOffer = offers.find((offer) => offer.slug === slug);

  return {
    props: {
      selectedOffer,
    },
  };
}

const OfferDetailPage = ({ selectedOffer }) => {
  return (
    <>
      <Head>
        <title>Confilogi | {selectedOffer.title}</title>
      </Head>
      <CareerHero />
      <PageWrapper selectedOffer={selectedOffer} />
      <Footer />
    </>
  );
};

export default OfferDetailPage;
