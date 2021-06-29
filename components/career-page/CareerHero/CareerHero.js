//styles
import { BackgroundWrapper, HeroTitle } from './CareerHero.style';

const CareerHero = () => {
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
        Kariera
      </HeroTitle>
    </BackgroundWrapper>
  );
};

export default CareerHero;
