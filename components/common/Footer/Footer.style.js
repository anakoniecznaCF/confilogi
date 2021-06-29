import styled from 'styled-components';
import Container from '../Container';

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.white};
padding: 3rem 0;

@media (min-width: 768px) {
  padding: 3.5rem 0 2.5rem 0;
}
`;

export const FooterWrapper = styled(Container)`
@media (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1045px;
  margin-bottom: 5rem;
}

@media (min-width: 1440px) {
  padding: 0;
}
`;

export const FooterText = styled.p`
font-size: 1.4rem;
line-height: ${({ theme }) => theme.lineHeight.small};

@media (min-width: 768px) {
  font-size: 1.6rem;
  line-height: ${({ theme }) => theme.lineHeight.extraLarge};
}
`;

export const Address = styled.address`
margin: 3rem 0;

@media (min-width: 768px) {
  margin: 0;
}
`;

export const AddressText = styled(FooterText)`
font-style: normal;
`;

export const CopyrightText = styled.p`
font-size: 1.2rem;
color: ${({ theme }) => theme.colors.lightGrey};
text-align: center;

@media (min-width: 768px) {
  font-size: 1.5rem;
}
`;

export const Bold = styled.span`
font-weight: 700;
`;

export const LinksList = styled.ul`
margin: 4.5rem 0 5.5rem 0;

@media (min-width: 768px) {
  margin: 0;
}
`;

export const LinksListLink = styled(FooterText)`
color: ${({ theme }) => theme.colors.white};
`;

export const StyledImg = styled.img`
width: 12.5rem;
height: auto;

@media (min-width: 1024px) {
  width: 15rem;
}

@media (min-width: 1440px) {
  width: 20.5rem;
}
`;