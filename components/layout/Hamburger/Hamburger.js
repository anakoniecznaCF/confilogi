//styles
import { HamburgerBtn, InnerHamburger } from './Hamburger.style';

const Hamburger = ({ menuOpen, toggleMenu }) => {
  return (
    <HamburgerBtn onClick={toggleMenu}>
      <InnerHamburger menuOpen={menuOpen}>
        <span></span>
        <span></span>
      </InnerHamburger>
    </HamburgerBtn>
  );
};

export default Hamburger;
