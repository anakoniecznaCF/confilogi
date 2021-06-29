import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem 1.5rem 4rem;
`;

export const Title = styled.h2`
  line-height: ${({theme}) => theme.lineHeight.large};
  text-align: center;
  margin-bottom: 3.5rem;

  @media (min-width: 768px) {
    padding: 9rem 0 2rem;
    margin-bottom: 8.5rem;
  }
`;
