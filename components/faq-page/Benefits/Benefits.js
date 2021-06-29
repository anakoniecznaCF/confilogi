import BenefitsItem from './BenefitsItem';
//styles
import { BackgroundWrapper, Wrapper, Title, BenefitsList } from './Benefits.style';
//data
import benefitsList from '../../../data/benefits-content';

const Benefits = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <Title>Zobacz, jakie mamy dla Ciebie benefity!</Title>
        <BenefitsList>
          {benefitsList &&
            benefitsList.map((benefit) => <BenefitsItem key={benefit.id} benefit={benefit} />)}
        </BenefitsList>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Benefits;
