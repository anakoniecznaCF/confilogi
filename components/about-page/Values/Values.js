import ValueItem from './ValuesItem';
//styles
import Container from '../../common/Container';
import { BackgroundWrapper, Title, TextBlock, YellowText, ValuesList } from './Values.style';
//data
import content from '../../../data/values-content';

const Values = () => {
  return (
    <BackgroundWrapper>
      <Container>
        <Title>
          Hasło, które nam przyświeca to{' '}
          <TextBlock>
            We <YellowText>grow</YellowText> together
          </TextBlock>
          , dlatego nasze wartości to:
        </Title>
        <ValuesList>
          {content && content.map((item) => <ValueItem key={item.id} item={item} />)}
        </ValuesList>
      </Container>
    </BackgroundWrapper>
  );
};

export default Values;
