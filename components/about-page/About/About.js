import AboutItem from './AboutItem';
//styles
import { BackgroundWrapper, ContentWrapper, AboutList } from './About.style';
//data
import content from '../../../data/about-content';

const About = ({ offers }) => {
  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <AboutList>
          {content &&
            content.map((item) => {
              return <AboutItem key={item.id} item={item} offers={offers} />;
            })}
        </AboutList>
      </ContentWrapper>
    </BackgroundWrapper>
  );
};

export default About;
