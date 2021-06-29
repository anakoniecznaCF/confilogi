import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
//styles
import * as Style from './CareerCTA.style';

const arrowContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

const arrowItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const button = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};

const CareerCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Style.Wrapper>
      <Style.Content>
        <Style.Title>
          Tylko <Style.YellowText>1 krok</Style.YellowText> dzieli Cię od naszej wspólnej przygody!
        </Style.Title>
          <Style.FlexWrapper ref={ref} variants={arrowContainer} animate={inView ? 'show' : 'hidden'}>
            {/* <Style.Line variants={arrowItem} /> */}
            <Style.Text variants={arrowItem}>dołącz do nas</Style.Text>
            <Style.ArrowWrapper variants={arrowItem}>
              <Style.ArrowLine />
              <Style.ArrowLineLeft />
              <Style.ArrowLineRight />
            </Style.ArrowWrapper>
          </Style.FlexWrapper>
          <Style.BtnWrapper>
            <Link href='/career'>
              <Style.CTABtn variants={button} animate={inView ? 'show' : 'hidden'}>
                Kariera
              </Style.CTABtn>
            </Link>
          </Style.BtnWrapper>
      </Style.Content>
    </Style.Wrapper>
  );
};

export default CareerCTA;
