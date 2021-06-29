import { useState } from 'react';
import OffersItem from './OffersItem';
import useDeviceWidth from '../../../customHooks/useDeviceWidth';
//styles
import {
  Wrapper,
  Title,
  OffersSelect,
  OffersSelectOpt,
  Radio,
  OffersList,
  RadioControl,
  RadioInput,
  RadioLabel,
  RadioWrapper,
  RadioGroup,
} from './Offers.style';

const Offers = ({ offers }) => {
  const [activeOffersSelect, setActiveOffersSelect] = useState('');
  const [activeOffersCheckbox, setActiveOffersCheckbox] = useState([]);

  const laptop = useDeviceWidth(1024)

  const selectedOffers =
    offers && activeOffersSelect
      ? offers
          .filter((offer) => offer.type === activeOffersSelect)
          .map((offer) => <OffersItem key={offer.id} offer={offer} />)
      : offers.map((offer) => <OffersItem key={offer.id} offer={offer} />);

  const handleCheckboxChange = (e) => {
    if (activeOffersCheckbox.includes(e.target.value)) {
      setActiveOffersCheckbox(
        activeOffersCheckbox.filter((offer) => {
          return offer !== e.target.value;
        })
      );
    } else {
      setActiveOffersCheckbox((prev) => [...prev, e.target.value]);
    }
  };

  const checkedOffers =
    offers && activeOffersCheckbox.length
      ? offers
          .filter((offer) => activeOffersCheckbox.includes(offer.type))
          .map((offer) => <OffersItem key={offer.id} offer={offer} />)
      : offers.map((offer) => <OffersItem key={offer.id} offer={offer} />);

  return (
    <Wrapper>
      <Title>Oferty pracy</Title>
      <OffersSelect
        value={activeOffersSelect}
        onChange={(e) => setActiveOffersSelect(e.target.value)}
      >
        <OffersSelectOpt value='Rozpoczynający karierę'>Rozpoczynający karierę</OffersSelectOpt>
        <OffersSelectOpt value='Konsultant'>Konsultanci</OffersSelectOpt>
        <OffersSelectOpt value='Profesjonalista'>Profesjonaliści</OffersSelectOpt>
      </OffersSelect>
      <Radio onChange={handleCheckboxChange}>
        <RadioWrapper>
          <RadioGroup>
            <RadioLabel>Rozpoczynający karierę</RadioLabel>
            <span>
              <RadioInput
                type='checkbox'
                value='Rozpoczynający karierę'
                name='Rozpoczynający karierę'
              />
              <RadioControl></RadioControl>
            </span>
          </RadioGroup>
          <RadioGroup>
            <RadioLabel>Konsultanci</RadioLabel>
            <span>
              <RadioInput type='checkbox' value='Konsultant' name='Konsultant' />
              <RadioControl></RadioControl>
            </span>
          </RadioGroup>
          <RadioGroup>
            <RadioLabel>Profesjonaliści</RadioLabel>
            <span>
              <RadioInput type='checkbox' value='Profesjonalista' name='Profesjonalista' />
              <RadioControl></RadioControl>
            </span>
          </RadioGroup>
        </RadioWrapper>
      </Radio>
      <OffersList>
        {laptop ? checkedOffers : selectedOffers}
      </OffersList>
    </Wrapper>
  );
};

export default Offers;
