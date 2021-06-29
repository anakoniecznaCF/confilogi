import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  z-index: 4;
`;

export const MobileList = styled(motion.ul)`
  padding-top: 20vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

export const NavListItem = styled(motion.li)`
  a {
    font-weight: ${({ active }) => (active ? '700' : '500')};
    color: ${({ active, theme }) => (active ? theme.colors.purple : theme.colors.black)};
  }
`;
