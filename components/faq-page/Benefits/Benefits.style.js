import styled from 'styled-components';
import Container from '../../common/Container';

export const BackgroundWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.darkOrange};
  padding: 5rem 0;
`;

export const Wrapper = styled(Container)`
  @media (min-width: 1440px) {
    padding: 0;
    max-width: 1150px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.large};
  margin-bottom: 7rem;
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  li:last-child {
      margin-bottom: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;