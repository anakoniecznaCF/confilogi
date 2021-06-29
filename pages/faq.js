import Head from 'next/head';
import Footer from '../components/common/Footer/Footer';
import Benefits from '../components/faq-page/Benefits/Benefits';
import FAQ from '../components/faq-page/FAQ/FAQ';
import FaqHero from '../components/faq-page/FaqHero/FaqHero';
import Recruitment from '../components/faq-page/Recruitment/Recruitment';

const QuestionsPage = () => {
  return (
    <>
      <Head>
        <title>Confilogi | Q&amp;A</title>
      </Head>
      <FaqHero />
      <Recruitment />
      <Benefits />
      <FAQ />
      <Footer />
    </>
  );
};

export default QuestionsPage;
