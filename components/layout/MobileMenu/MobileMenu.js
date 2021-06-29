import NavLink from '../../common/NavLink';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
//styles
import { Overlay, MobileList, NavListItem } from './MobileMenu.style';

const menuContainer = {
  hidden: {
    x: '-100vw',
    opacity: 0,
    transition: {
      delay: 0.8,
    },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      bounce: 0.1,
      duration: 0.5,
    },
  },
};

const navListContainer = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: {
      bounce: 0.1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.1,
    },
  },
};

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  const router = useRouter();

  return (
    <Overlay variants={menuContainer} animate={menuOpen ? 'show' : 'hidden'}>
      <MobileList variants={navListContainer} animate={menuOpen ? 'show' : 'hidden'}>
        <NavListItem variants={listItem} onClick={toggleMenu} active={router.pathname === '/about' ? true : false}>
          <NavLink href='/about'>Poznajmy się</NavLink>
        </NavListItem>
        <NavListItem variants={listItem} onClick={toggleMenu} active={router.pathname === '/faq' ? true : false}>
          <NavLink href='/faq'>Q&amp;A</NavLink>
        </NavListItem>
        <NavListItem variants={listItem} onClick={toggleMenu} active={(router.pathname === '/career' || router.pathname === '/career/[slug]') ? true : false}>
          <NavLink href='/career'>Kariera</NavLink>
        </NavListItem>
        <NavListItem variants={listItem} onClick={toggleMenu} active={router.pathname === '/contact' ? true : false}>
          <NavLink href='/contact'>Kontakt</NavLink>
        </NavListItem>
      </MobileList>
    </Overlay>
  );
};

export default MobileMenu;
