import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.darkOrange};
padding-top: 3.5rem;

@media (min-width: 768px) {
  padding-top: 7.5rem;
}
`;

export const Title = styled.h2`
text-align: center;
max-width: 97rem;
margin: 0 auto;
line-height: ${({theme}) => theme.lineHeight.large};

@media (min-width: 768px) {
  line-height: 4.5rem;
}
`;

export const ValuesList = styled.ul`
padding: 8rem 0 9.5rem 0;

li:last-child::after {
  display: none;
}

@media (min-width: 1024px) {
  display: flex;
  justify-content: center;
  align-items: center;

  li:nth-child(2) {
    position: relative;

    @media (min-width: 1024px) {
      &::after,
      ::before {
        content: '';
        height: 18.5rem;
        width: 0.15rem;
        display: block;
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 0.15rem;
        position: absolute;
        margin: 0;
      }

      &::after {
        top: 4rem;
        left: 0;
      }

      &::before {
        top: 4rem;
        right: 0;
      }
    }
  }

  li:first-child {
    padding-left: 0;
  }

  li:last-child {
    padding-right: 0;
  }
}
`;

export const YellowText = styled.span`
color: ${({ theme }) => theme.colors.darkOrange};
`;

export const TextBlock = styled.span`
text-transform: uppercase;
display: inline-block;
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.white};
width: fit-content;
padding: 0 0.5rem;
`;
