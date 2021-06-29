import Link from 'next/link';
import styled from 'styled-components';

const NavLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(NavLink)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;

  @media (min-width: 1440px) {
    font-size: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
