import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem 1.5rem;
  background-color: #f5f5f5;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    width: 40%;
    margin-top: 13.5rem;
    padding: 6rem 5rem;
    margin-bottom: 5.5rem;
  }

  @media (min-width: 1440px) {
    padding: 6rem 12rem 6rem 5rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 4.5rem;
  }
`;

export const Status = styled.p`
  text-transform: uppercase;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;

  ${({ status }) =>
    status === 'Aplikacja otwarta' &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}

  ${({ status }) =>
    status === 'Otwarcie wkrótce' &&
    css`
      color: ${({ theme }) => theme.colors.darkOrange};
    `}

    @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 5rem;
  }
`;

export const FormWrapper = styled.div`
  @media (min-height: 890px) {
    position: sticky;
    top: 2rem;
  }
`;
