import styled from 'styled-components';
import Container from '../../common/Container';

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 0 6.5rem 0;

  @media (min-width: 1440px) {
    padding: 7rem 20rem 7rem 20rem;
  }
`;

export const AboutList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    padding: 0 15rem;
  }

  @media (min-width: 1600px) {
    padding: 0;

    li:first-child {
      border-left: none;
      padding-left: 0;
    }

    li:last-child {
      padding-right: 0;
    }

    grid-template-columns: 1.1fr 0.9fr 1.1fr 0.9fr 1.1fr 0.9fr;
  }
`;