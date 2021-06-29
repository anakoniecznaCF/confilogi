//styles
import {
  BackgroundWrapper,
  ContentWrapper,
  Title,
  TextWrapper,
  HeroText,
  Bold,
} from './AboutHero.style';

const contentContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.3, when: 'beforeChildren' } },
};

const contentItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const AboutHero = () => {
  return (
    <BackgroundWrapper>
      <ContentWrapper variants={contentContainer} initial='hidden' animate='show'>
        <Title variants={contentItem}>Poznajmy się</Title>
        <TextWrapper variants={contentItem}>
          <HeroText>
            Jesteśmy polską firmą specjalizującą się w szeroko rozumianej telefonicznej obsłudze
            Klienta. Naszym sercem jest prężnie działające Contact Center wspierane przez niezbędne
            do jego efektywnego funkcjonowania działy. Jesteśmy dojrzałym start-upem, który
            nieustannie się rozwija – w ciągu 5 lat istnienia zdobyliśmy kilka rynków europejskich
            oraz wielokrotnie powiększyliśmy swój team. I robimy to nadal!
          </HeroText>
          <HeroText>
            Produkty oferowane przez naszych Partnerów to wysokiej jakości rozwiązania wspomagające
            utrzymanie zdrowia, urody oraz dobrego samopoczucia. Wśród bogatego asortymentu znajdują
            się m.in. suplementy klasy premium oraz sprzęt okołomedyczny. Nasi partnerzy stawiają na
            jakość, dlatego produkty są w 100% naturalne i w pełni bezpieczne. To dla nas
            wyróżnienie, że możemy pomagać w ich sprzedaży. Do tego potrzebujemy osób, które swoim
            talentem, zaangażowaniem i nietuzinkowym podejściem potrafią spełnić oczekiwania
            klientów. Taki właśnie jest <Bold>#confilogiteam!</Bold>
          </HeroText>
        </TextWrapper>
      </ContentWrapper>
    </BackgroundWrapper>
  );
};

export default AboutHero;
