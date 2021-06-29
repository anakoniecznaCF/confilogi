import { useInView } from 'react-intersection-observer';
import Form from '../../common/Form/Form';
//styles
import { Wrapper, MainTitle, FormWrapper, FormTitle } from './ContactForm.style';

const formContainer = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <MainTitle>
        Masz pytania? A może chcesz nas lepiej poznać? <br /> Odezwij się do nas przez formularz
        kontaktowy lub na dajnamznac@
      </MainTitle>
      <FormWrapper ref={ref} variants={formContainer} animate={inView ? 'show' : 'hidden'}>
        <FormTitle>Formularz kontaktowy</FormTitle>
        <Form contact template={`${process.env.EMAILJS_TEMPLATE_CONTACT}`} />
      </FormWrapper>
    </Wrapper>
  );
};

export default ContactForm;
