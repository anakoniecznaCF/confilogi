import styled from 'styled-components';
import Container from '../../common/Container';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 0.5rem 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  z-index: 5;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: 10rem;
  height: auto;

  @media (min-width: 1024px) {
    width: 13rem;
  }

  @media (min-width: 1440px) {
    width: 18.5rem;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: block;

    li:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 1440px) {
    li:last-child {
      margin-right: 6rem;
    }
  }
`;

export const NavListItem = styled.li`
  display: inline-block;
  margin: 0 2rem;

  a {
    font-weight: ${({ active }) => (active ? '700' : '500')};
    color: ${({ active, theme }) => (active ? theme.colors.purple : theme.colors.black)};
  }

  @media (min-width: 1440px) {
    margin: 0 3.5rem;
  }
`;
