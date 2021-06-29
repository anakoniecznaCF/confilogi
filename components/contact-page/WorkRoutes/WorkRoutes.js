import WorkRoutesItem from './WorkRoutesItem';
//styles
import { BackgroundWrapper, Title, WorkRoutesList } from './WorkRoutes.style';
//data
import content from '../../../data/work-routes-content';

const WorkRoutes = () => {
  return (
    <BackgroundWrapper>
      <Title>
        Wszystkie drogi prowadzą do… Confilogi! Zobacz, jak łatwo do nas trafić.
      </Title>
      <WorkRoutesList>
        {content && content.map((item) => (
          <WorkRoutesItem key={item.id} item={item} />
        ))}
      </WorkRoutesList>
    </BackgroundWrapper>
  );
};

export default WorkRoutes;
