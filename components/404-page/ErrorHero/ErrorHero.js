import Link from 'next/link';
//styles
import { Wrapper, Title, SubTitle, BackBtn } from './ErrorHero.style';

const ErrorHero = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <SubTitle>Strona, której szukasz nie istnieje... jeszcze.</SubTitle>
      <SubTitle>Może chcesz do nas dołączyć i pomóc nam ją stworzyć?</SubTitle>
      <Link href='/career'>
        <BackBtn>Sprawdź dostępne oferty pracy</BackBtn>
      </Link>
    </Wrapper>
  );
};

export default ErrorHero;
