import Head from 'next/head';
import ContactHero from '../components/contact-page/ContactHero/ContactHero';
import ContactForm from '../components/contact-page/ContactForm/ContactForm';
import Footer from '../components/common/Footer/Footer';
import Address from '../components/contact-page/Address/Address';
import WorkRoutes from '../components/contact-page/WorkRoutes/WorkRoutes';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Confilogi | Kontakt</title>
      </Head>
      <ContactHero />
      <Address />
      <WorkRoutes />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
