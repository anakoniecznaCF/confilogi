//styles
import { BackgroundWrapper, HeroTitle } from './ContactHero.style';

const ContactHero = () => {
  return (
    <BackgroundWrapper>
      <HeroTitle
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
          },
        }}
      >
        Kontakt
      </HeroTitle>
    </BackgroundWrapper>
  );
};

export default ContactHero;
