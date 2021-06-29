import RecruitmentStep from './RecruitmentStep';
import Container from '../../common/Container';
//styles
import {
  Wrapper,
  Title,
  SubTitle,
  RecruimentStartingCareerList,
  RecruitmentProfessionalList,
  PurpleText
} from './Recruitment.style';
//data
import startingCareerSteps from '../../../data/recruitment-starting-career-content';
import professionalSteps from '../../../data/recruitment-professional-content';

const Recruitment = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Chcesz do nas dołączyć? Zobacz, jakie to proste!</Title>
        <SubTitle>
          Jeśli aplikujesz na stanowisko <PurpleText>rozpoczynającego karierę</PurpleText> lub{' '}
          <PurpleText>konsultanta</PurpleText>:
        </SubTitle>
        :
        <RecruimentStartingCareerList>
          {startingCareerSteps &&
            startingCareerSteps.map((step, index) => {
              return <RecruitmentStep step={step} key={step.id} index={index}/>;
            })}
        </RecruimentStartingCareerList>
        <SubTitle>
          Jeśli aplikujesz na stanowisko <PurpleText>profesjonalisty:</PurpleText>
        </SubTitle>
        <RecruitmentProfessionalList>
          {professionalSteps &&
            professionalSteps.map((step, index) => <RecruitmentStep key={step.id} step={step} index={index}/>)}
        </RecruitmentProfessionalList>
      </Container>
    </Wrapper>
  );
};

export default Recruitment;
