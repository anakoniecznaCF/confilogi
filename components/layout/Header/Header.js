import { useState } from 'react';
import { useRouter } from 'next/router';
import NavLink from '../../common/NavLink';
import Hamburger from '../Hamburger/Hamburger';
import MobileMenu from '../MobileMenu/MobileMenu';
//styles
import * as Style from './Header.style';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    router.push('/');
  };

  return (
    <Style.StyledHeader>
      <Style.HeaderWrapper>
        <Style.StyledLogo onClick={handleLogoClick}>
          <Style.StyledImg src='/images/desktop/Confilogi_logo.svg' alt='Confilogi Logo' />
        </Style.StyledLogo>
        <nav>
          <Style.NavList>
            <Style.NavListItem active={router.pathname === '/about' ? true : false}>
              <NavLink href='/about'>Poznajmy się</NavLink>
            </Style.NavListItem>
            <Style.NavListItem active={router.pathname === '/faq' ? true : false}>
              <NavLink href='/faq'>Q&amp;A</NavLink>
            </Style.NavListItem>
            <Style.NavListItem
              active={
                router.pathname === '/career' || router.pathname === '/career/[slug]' ? true : false
              }
            >
              <NavLink href='/career'>Kariera</NavLink>
            </Style.NavListItem>
            <Style.NavListItem active={router.pathname === '/contact' ? true : false}>
              <NavLink href='/contact'>Kontakt</NavLink>
            </Style.NavListItem>
          </Style.NavList>
          <Hamburger toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </nav>
      </Style.HeaderWrapper>
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Style.StyledHeader>
  );
};

export default Header;
