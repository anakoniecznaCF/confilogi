import styled from 'styled-components';
import Slider from 'react-slick';

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const Wrapper = styled.div`
  padding: 4rem 1.5rem 6rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4.5rem 0 10rem 0;
  }
`;

export const StyledSlider = styled(Slider)`
  @media (min-width: 1440px) {
    .slick-list {
      padding: 0 25rem !important;
    }
  }
`;
