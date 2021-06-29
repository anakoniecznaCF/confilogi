import styled from 'styled-components';

export const Wrapper = styled.li`
  max-width: 49.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
    height: 0.15rem;
    width: 18.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 0.15rem;
    margin: 4rem 0;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 4.5rem;
    margin: unset;
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-transform: uppercase;
  margin: 2.5rem 0;
`;

export const Text = styled.p`
  height: 12rem;
  font-size: 1.6rem;
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-align: center;

  @media (min-width: 1440px) {
    padding: 0 6rem;
  }
`;