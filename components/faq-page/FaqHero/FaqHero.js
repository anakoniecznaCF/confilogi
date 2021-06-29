//styles
import { HeroSection, HeroTitle } from './FaqHero.style';

const FaqHero = () => {
  return (
    <HeroSection>
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
        Q&amp;A
      </HeroTitle>
    </HeroSection>
  );
};

export default FaqHero;
