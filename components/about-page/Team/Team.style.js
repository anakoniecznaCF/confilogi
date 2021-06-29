import styled from 'styled-components';
import Container from '../../common/Container';
import { motion } from 'framer-motion';

export const Wrapper = styled(Container)`
  padding: 4rem 1.5rem;

  @media (min-width: 768px) {
    padding: 9rem 0 7.5rem 0;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.regular};

  @media (min-width: 768px) {
    line-height: ${({ theme }) => theme.lineHeight.extraExtraLarge};
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 4rem auto;
  line-height: ${({ theme }) => theme.lineHeight.regular};
  max-width: 97rem;

  @media (min-width: 768px) {
    margin: 6.5rem auto 8.5rem auto;
    padding: 0 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 7.5rem;
  }
`;

export const TeamList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li:nth-child(2) {
    margin: 3.5rem 0;

    @media (min-width: 1024px) {
      margin: 0 5rem;
    }

    @media (min-width: 1440px) {
      margin: 0 16rem;
    }
  }

  @media (min-width: 768px) {
    li:first-child h3 {
      margin-bottom: 1.9rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TeamListItem = styled(motion.li)`
  border: 0.2rem solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 1.5rem;
  padding: 4.5rem 1.5rem 2.3rem 1.5rem;
  background-size: cover;
  background-position: center top;
  box-shadow: 0 0.3rem 0.6rem 0 ${({ theme }) => theme.colors.lightPurple};
  max-width: 29.7rem;
  height: 27rem;

  @media (min-width: 768px) {
    height: 34rem;
  }
`;

export const FirstTeamListItem = styled(TeamListItem)`
  background-image: url('/images/desktop/rozpoczynajacy-kariere.png');
`;

export const SecondTeamListItem = styled(TeamListItem)`
  background-image: url('/images/desktop/konsultanci.png');
`;

export const ThirdTeamListItem = styled(TeamListItem)`
  background-image: url('/images/desktop/profesjonalisci.png');
`;

export const TeamListItemTitle = styled.h3`
  margin-bottom: 5.3rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 4.8rem;
    font-size: 2.3rem;
    line-height: 3.3rem;
  }
`;

export const TeamListItemText = styled.p`
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.regular};

  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: ${({ theme }) => theme.lineHeight.large};
  }
`;
