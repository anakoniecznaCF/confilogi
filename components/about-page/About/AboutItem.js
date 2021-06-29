import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
//styles
import { ItemWrapper, ItemNumber, ItemText } from './AboutItem.style';

const offersText = (num) => {
  let text;

  if (num === 1) {
    text = 'dostępna oferta pracy';
  } else if (num === 2 || num === 3 || num === 4) {
    text = 'dostępne oferty pracy';
  } else {
    text = 'dostępnych ofert pracy';
  }

  return text;
};

const AboutItem = ({ item, offers }) => {
  const { id, img, num, text } = item;
  const [active, setActive] = useState(false);

  return (
    <ItemWrapper>
      <img src={img} alt='' />
      <ItemNumber>
        <CountUp start={active ? 0 : null} end={id == 'a6' ? +offers : num} duration={4}>
          {({ countUpRef }) => (
            <VisibilitySensor onChange={(isVisible) => isVisible && setActive(true)} delayedCall>
              <span ref={countUpRef}></span>
            </VisibilitySensor>
          )}
        </CountUp>
        <span>{id === 'a5' ? '%' : null}</span>
      </ItemNumber>
      <ItemText>{id === 'a6' ? offersText(offers) : text}</ItemText>
    </ItemWrapper>
  );
};

export default AboutItem;
