//styles
import {
  StyledFooter,
  FooterWrapper,
  FooterText,
  Address,
  AddressText,
  CopyrightText,
  Bold,
  LinksList,
  LinksListLink,
  StyledImg,
} from './Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <StyledImg src='/images/desktop/Confilogi_logo_footer.svg' alt='Confilogi Logo' />
        <Address>
          <AddressText>
            <Bold>Adres głównej siedziby firmy:</Bold> <br /> ul. Siłaczki 3/9 <br /> 02-495
            Warszawa
          </AddressText>
        </Address>
        <div>
          <FooterText>
            <Bold>NIP:</Bold> 5242898674
          </FooterText>
          <FooterText>
            <Bold>REGON:</Bold> 385630145
          </FooterText>
          <FooterText>
            <Bold>KRS:</Bold> 0000830381
          </FooterText>
        </div>
        <LinksList>
          <li>
            <LinksListLink as='a' href='/'>
              Regulamin
            </LinksListLink>
          </li>
          <li>
            <LinksListLink as='a' href='/'>
              Polityka prywatności
            </LinksListLink>
          </li>
          <li>
            <LinksListLink href='/'>Polityka plików cookies</LinksListLink>
          </li>
        </LinksList>
      </FooterWrapper>
      <CopyrightText>Copyright 2021 &copy; Confilogi</CopyrightText>
    </StyledFooter>
  );
};

export default Footer;
