import styled from 'styled-components';

export const Wrapper = styled.li`
  border: 0.2rem solid ${({ theme }) => theme.colors.darkOrange};
  border-radius: 1rem;
  padding: 2.5rem 2rem 1.5rem 2rem;
  height: 43rem;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Opinion = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeight.regular};

  @media (min-width: 768px) {
      font-size: 1.4rem;
  }
`;

export const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkOrange};
  line-height: 1;
`;
