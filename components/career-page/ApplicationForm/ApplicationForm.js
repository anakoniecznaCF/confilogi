import { useInView } from 'react-intersection-observer';
import Form from '../../common/Form/Form';
//styles
import { Wrapper, Title, Text, FormWrapper, FormTitle } from './ApplicationForm.style';

const formContainer = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const ApplicationForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <Title>
        Nie możesz znaleźć interesującej oferty, a chcesz stać się częścią #confilogiteam?{' '}
      </Title>
      <Text>
        Nic straconego! Rozwijamy się w ekspresowym tempie, dlatego wciąż uruchamiamy kolejne
        rekrutacje. Jesteśmy otwarci na kandydatów, którzy cechują się ciekawymi umiejętnościami i
        wyjątkową osobowością. Prześlij nam swoje CV, a jeśli okaże się, że Twoje doświadczenie
        pasuje do naszych oczekiwań, skontaktujemy się z Tobą. Dzięki temu masz szansę otrzymać
        informację o przyszłych rekrutacjach jako pierwszy i wyprzedzić konkurencję!
      </Text>
      <FormWrapper ref={ref} variants={formContainer} animate={inView ? 'show' : 'hidden'}>
        <FormTitle>Wypełnij formularz</FormTitle>
        <Form template={`${process.env.EMAILJS_TEMPLATE_CARRIER}`}/>
      </FormWrapper>
    </Wrapper>
  );
};

export default ApplicationForm;
