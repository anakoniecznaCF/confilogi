import styled from 'styled-components';

export const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0.8rem 0.4rem;
  width: 3.3rem;
  height: 3.3rem;
  cursor: pointer;
  z-index: 5;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const InnerHamburger = styled.div`
  width: 2.5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;


  span:first-child,
  span:last-child {
    display: block;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  span:first-child {
    width: 0.3rem;
    border-radius: 50%;
  }

  span:last-child {
    width: 1.9rem;
    border-radius: 0.94rem;
  }

  &::after,
  ::before {
    content: '';
    display: block;
    width: 2.5rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    left: 0;
    border-radius: 0.94rem;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${({menuOpen}) => menuOpen ? '0' : '0.8rem'};
  }

  &::after {
    top: ${({menuOpen}) => menuOpen ? '0' : '-0.8rem'};
  }
`;