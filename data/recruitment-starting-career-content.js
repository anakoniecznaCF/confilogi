//styles
import { Text, Bold } from '../components/faq-page/Recruitment/RecruitmentStep.style';
//images
import Application from '../public/images/desktop/aplikacja.svg';
import Conversation from '../public/images/desktop/rozmowa.svg';
import Decision from '../public/images/desktop/decyzja.svg';

const startingCareerSteps = [
    {
      id: 'r1',
      img: <Application />,
      title: 'Aplikacja',
      text: (
        <Text>
          Prześlij nam swoje CV. Możesz też napisać kilka słów o sobie.
        </Text>
      ),
    },
    {
      id: 'r2',
      img: <Conversation />,
      title: 'Rozmowa',
      text: (
        <Text>
          Zaprosimy Cię na rozmowę, aby poznać Twoje doświadczenie i wzajemne oczekiwania.
        </Text>
      ),
    },
    {
      id: 'r3',
      img: <Decision />,
      title: 'Decyzja',
      text: (
        <Text>
          Witamy na pokładzie! Teraz jesteś częścią <Bold>#confilogiteam!</Bold>
        </Text>
      ),
    },
  ];


  export default startingCareerSteps;