import { useInView } from 'react-intersection-observer';
//styles
import {
  Wrapper,
  Title,
  Text,
  SubTitle,
  Bold,
  TeamList,
  FirstTeamListItem,
  SecondTeamListItem,
  ThirdTeamListItem,
  TeamListItemTitle,
  TeamListItemText,
} from './Team.style';

const teamListContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const teamListItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Wrapper>
      <Title>
        Dołącz do naszego dream team, czyli <Bold>#confilogiteam!</Bold>
      </Title>
      <Text>
        W Confilogi każdy jest twórcą naszego wspólnego sukcesu. Nieważne, z jakim doświadczeniem do
        nas przychodzisz i z jakiego kraju pochodzisz – potrzebujemy właśnie Ciebie!
      </Text>
      <SubTitle> #confilogiteam tworzą:</SubTitle>
      <TeamList variants={teamListContainer} animate={inView ? 'show' : 'hidden'} ref={ref}>
        <FirstTeamListItem variants={teamListItem}>
          <TeamListItemTitle>Rozpoczynający karierę</TeamListItemTitle>
          <TeamListItemText>
            Stawiasz pierwsze kroki na rynku pracy? Chcesz się uczyć nowych rzeczy? Sprawdź, jakie
            mamy dla Ciebie możliwości oraz jak przebiega proces rekrutacji. 
          </TeamListItemText>
        </FirstTeamListItem>
        <SecondTeamListItem variants={teamListItem}>
          <TeamListItemTitle>Konsultanci</TeamListItemTitle>
          <TeamListItemText>
            Lubisz kontakt z ludźmi? <br /> Chcesz, żeby wokół ciągle się coś działo? Praca z
            klientem to codziennie inne wyzwania i brak czasu na nudę.
          </TeamListItemText>
        </SecondTeamListItem>
        <ThirdTeamListItem variants={teamListItem}>
          <TeamListItemTitle>Profesjonaliści</TeamListItemTitle>
          <TeamListItemText>
            Posiadasz doświadczenie i ciągle rozwijasz swoją karierę? Docenimy Twoją wiedzę i
            zaangażowanie. Zobacz, jakie oferty mamy dla Ciebie oraz jak przebiega proces
            rekrutacji. 
          </TeamListItemText>
        </ThirdTeamListItem>
      </TeamList>
    </Wrapper>
  );
};

export default Team;
