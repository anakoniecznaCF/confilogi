import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3.5rem 0 2rem;

  @media (min-width: 1024px) {
    padding: 5rem 5rem 7.5rem;
    width: 60%;
  }

  @media (min-width: 1440px) {
    padding: 5rem 7rem 7.5rem 14.5rem;
  }
`;

export const StyledLink = styled.a`
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  padding-left: 3.65rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    left: 0;
    background-image: url('/images/desktop/arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 1.2rem;
    width: 1.8rem;
    transition: all 0.3s ease-out;
  }

  &:hover::after {
    left: -0.5rem;
  }
`;

export const Title = styled.h2`
  margin: 3rem 0;
  line-height: ${({theme}) => theme.lineHeight.regular};
  font-size: 1.8rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin: 5rem 0 1.5rem;
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    margin: 10rem 0 1.5rem;
  }
`;

export const Intro = styled.p`
  line-height: ${({theme}) => theme.lineHeight.regular};
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const MediumText = styled.p`
  margin-bottom: 1.8rem;
  font-weight: 500;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export const OrangeText = styled.span`
  color: ${({ theme }) => theme.colors.darkOrange};
  text-transform: uppercase;
  font-weight: 700;
`;

export const ListWrapper = styled.div`
  padding-top: 5rem;
`;

export const ListTitle = styled.h3`
  font-size: 1.6rem;
  line-height: ${({theme}) => theme.lineHeight.regular};
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    line-height: ${({theme}) => theme.lineHeight.large};
  }
`;

export const ListItem = styled.li`
  line-height: ${({theme}) => theme.lineHeight.small};
  margin-bottom: 2rem;
  display: inline-block;

  &::before {
    content: '';
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    background-color: ${({theme}) => theme.colors.lightPurple};
    border-radius: 50%;
  }

  p {
    display: inline;
    padding-left: 1.8rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.6rem;
    }
    margin-bottom: 2.3rem;
  }
`;

export const AprrovalIntro = styled.p`
  font-size: 1.3rem;
  line-height: 2.3rem;
  text-decoration: underline;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const AprrovalText = styled(AprrovalIntro)`
  text-decoration: none;
  font-style: italic;
`;